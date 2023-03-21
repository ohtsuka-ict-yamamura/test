import { getAllPosts } from '@/lib/posts/getAllPosts';
import type { Post } from '@/types/Post';

export const getPostsByTag = async (tag: string): Promise<Post[]> => {
  const allPosts = await getAllPosts();
  const postsIncludingTag = allPosts.filter((post) =>
    post.tags
      .map((tag) => new RegExp(tag, 'i'))
      .some((regexp) => regexp.test(tag)),
  );

  return postsIncludingTag;
};
