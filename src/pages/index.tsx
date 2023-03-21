import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { getPostsOnPage } from '@/lib/posts/getPostsOnPage';
import { siteConfig } from '@/constants/siteConfig';
import PostList from '@/components/PostList';
import type { Post } from '@/types/Post';

const { MAX_POSTS_COUNT_PER_PAGE } = siteConfig;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const postsOnPage = await getPostsOnPage(1);

  return {
    props: {
      postsOnPage,
    },
  };
};

type Props = {
  postsOnPage: Post[];
};

const Home: NextPage<Props> = ({ postsOnPage }) => {
  return (
    <div className="flex flex-col">
      <div className="mb-8 w-full">
        <h1 className="mb-4 text-center font-vt323 text-2xl sm:text-3xl">
          {postsOnPage.length === 0
            ? '$ cat yamamura.log $gt /dev/null'
            : `$ sed -n '1, ${postsOnPage.length}' yamamura.log`}
        </h1>
      </div>
      <div className="flex-grow">
        <PostList posts={postsOnPage} />
      </div>
      {MAX_POSTS_COUNT_PER_PAGE === postsOnPage.length && (
        <div className="bottom-0 mt-10 flex justify-center text-nord-9 hover:underline focus:underline">
          <Link href="/posts/page/1">すべての記事を見る →</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
