// import { getPostBySlug, getAllSlugs } from '@/lib/posts';
import { getAllSlugs } from '@/lib/posts/getAllSlugs';
import { getPostBySlug } from '@/lib/posts/getPostBySlug';
import { Post } from '@/types/Post';

export const getAllPosts = async (): Promise<Post[]> => {
  const slugs = await getAllSlugs();
  const posts = Promise.all(slugs.map((slug) => getPostBySlug(slug)));

  return posts;
};
