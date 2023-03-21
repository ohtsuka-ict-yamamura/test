import { getAllPosts } from '@/lib/posts/getAllPosts';
import { siteConfig } from '@/constants/siteConfig';
import type { Post } from '@/types/Post';

const { MAX_POSTS_COUNT_PER_PAGE } = siteConfig;

export const getPostsOnPage = async (pageNumber: number): Promise<Post[]> => {
  const allPosts = await getAllPosts();

  return allPosts.slice(
    (pageNumber - 1) * MAX_POSTS_COUNT_PER_PAGE,
    pageNumber * MAX_POSTS_COUNT_PER_PAGE,
  );
};
