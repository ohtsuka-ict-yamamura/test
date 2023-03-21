import { createContext } from 'react';
import posts from '../../data/postsData.json';
import { isPost, Post } from '@/types/Post';

export const usePostsContext = () => {
  if (!posts.every((post) => isPost(post))) {
    throw new Error('Invalid post file exists');
  }

  return createContext<Post[]>(posts);
};
