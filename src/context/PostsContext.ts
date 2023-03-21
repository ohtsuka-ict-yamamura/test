import { createContext } from 'react';
import posts from '../../data/postsData.json';
import { isPost, Post } from '@/types/Post';

if (!posts.every((post) => isPost(post))) {
  throw new Error('Invalid post file exists');
}

export const PostsContext = createContext<Post[]>(posts);
// type PostData = Omit<Post, keyof FrontMatter>;
// const isPostData = (arg: unknown): arg is PostData => {
//   const postData = arg as PostData;
//   return (
//     typeof postData?.content === 'string' && typeof postData?.slug === 'string'
//   );
// };

// if (!postsData.every((postData) => isPostData(postData))) {
//   throw new Error('Invalid post file exists');
// }
