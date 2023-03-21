import { getAllPosts } from '@/lib/posts/getAllPosts';

export const getAllTags = async (): Promise<string[]> => {
  const allPosts = await getAllPosts();
  return allPosts
    .map((post) => post.tags)
    .flat()
    .reduce((allTags: string[], currentTag: string) => {
      return allTags.includes(currentTag) ? allTags : [currentTag, ...allTags];
    }, [])
    .sort();
};
