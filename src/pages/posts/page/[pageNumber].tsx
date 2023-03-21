import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllPosts } from '@/lib/posts/getAllPosts';
import { getPostsOnPage } from '@/lib/posts/getPostsOnPage';
import { siteConfig } from '@/constants/siteConfig';
import Pagination from '@/components/Pagination';
import PostList from '@/components/PostList';
import posts from '../../../../data/postsData.json';
import type { Post } from '@/types/Post';

type Params = ParsedUrlQuery & {
  pageNumber: string;
};
type Props = {
  pageNumber: number;
  posts: Post[];
  totalNumberOfPosts: number;
};

const { MAX_POSTS_COUNT_PER_PAGE } = siteConfig;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const totalPages = Math.ceil(posts.length / MAX_POSTS_COUNT_PER_PAGE);
  const pageNumbers = Array.from(new Array(totalPages), (_, index) =>
    (index + 1).toString(),
  );
  const paths = pageNumbers.map((pageNumber) => ({ params: { pageNumber } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const pageNumber = parseInt((params as Params).pageNumber);
  const posts = await getPostsOnPage(pageNumber);
  const totalNumberOfPosts = (await getAllPosts()).length;

  return {
    props: {
      pageNumber,
      posts,
      totalNumberOfPosts,
    },
  };
};

const PostsPage: NextPage<Props> = ({
  pageNumber,
  posts,
  totalNumberOfPosts,
}) => {
  const firstPostNumberOnPage = (pageNumber - 1) * MAX_POSTS_COUNT_PER_PAGE + 1;
  const lastPageNumberOnPage = firstPostNumberOnPage + posts.length - 1;
  return (
    <div className="flex flex-col">
      <div className="mb-8 w-full">
        <h1 className="mb-4 text-center font-vt323 text-2xl sm:text-3xl">
          {posts.length === 0
            ? '$ cat yamamura.log $gt /dev/null'
            : `$ sed -n '${firstPostNumberOnPage}, ${lastPageNumberOnPage}' yamamura.log`}
        </h1>
      </div>
      <div className="flex-grow">
        <PostList posts={posts} />
      </div>
      <div className="bottom-0 mt-10">
        <Pagination
          currentPageNumber={pageNumber}
          totalNumberOfPosts={totalNumberOfPosts}
        />
      </div>
    </div>
  );
};

export default PostsPage;
