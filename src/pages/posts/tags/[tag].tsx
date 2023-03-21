import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllTags } from '@/lib/posts/getAllTags';
import { getPostsByTag } from '@/lib/posts/getPostsByTag';
import PostList from '@/components/PostList';
import type { Post } from '@/types/Post';

type Params = ParsedUrlQuery & {
  tag: string;
};
type Props = {
  tag: string;
  posts: Post[];
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const allTags = (await getAllTags()).map((tag) => tag.toLowerCase());
  const paths = allTags.map((tag) => {
    return {
      params: {
        tag,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { tag } = params as Params;
  const posts = await getPostsByTag(tag);

  return {
    props: {
      tag,
      posts,
    },
  };
};

const PostsPage: NextPage<Props> = ({ tag, posts }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-8 w-full">
        <h1 className="mb-4 text-center font-vt323 text-2xl sm:text-3xl">
          {`$ grep '${tag}' yamamura.log`}
        </h1>
      </div>
      <div className="flex-grow">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default PostsPage;
