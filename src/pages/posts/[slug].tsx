import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { getAllSlugs } from '@/lib/posts/getAllSlugs';
import { getPostBySlug } from '@/lib/posts/getPostBySlug';
import { htmlToReactComponents } from '@/lib/rehype';
import Tag from '@/components/Tag';
import { Post } from '@/types/Post';

type Params = ParsedUrlQuery & {
  slug: string;
};
type Props = {
  post: Post;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const allSlugs = await getAllSlugs();
  const paths = allSlugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const { slug } = params as Params;
  const post = await getPostBySlug(slug);

  return { props: { post } };
};

const Post = ({ post }: Props) => {
  const { title, date, lastMod, content, tags } = post;

  return (
    <div className="flex flex-col">
      <div>
        <div className="pb-10">
          <div className="flex gap-x-2">
            <Image
              src="/assets/publish-date.svg"
              alt=""
              width={16}
              height={16}
            />
            <span>{date}</span>
          </div>
          {lastMod !== null && (
            <div className="flex gap-x-2">
              <Image
                src="/assets/last-modified-date.svg"
                alt=""
                width={16}
                height={16}
              />
              <span>{lastMod}</span>
            </div>
          )}
        </div>
        <h1 className="mb-4 text-2xl text-nord-3 sm:text-3xl">{title}</h1>
        <div className="flex justify-start gap-4">
          <ul className="flex gap-x-2">
            {tags.map((tag) => (
              <li key={tag}>
                <Tag name={tag} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="prose flex-grow">
        <div>{htmlToReactComponents(content)}</div>
      </div>
    </div>
  );
};

export default Post;
