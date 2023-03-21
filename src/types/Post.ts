import { isFrontMatter, FrontMatter } from '@/types/FrontMatter';

export type Post = FrontMatter & {
  content: string;
  slug: string;
};

export const isPost = (arg: unknown): arg is Post => {
  const post = arg as Post;

  return (
    typeof post?.slug === 'string' &&
    typeof post?.content === 'string' &&
    isFrontMatter(post)
  );
};
