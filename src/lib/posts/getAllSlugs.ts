import path from 'path';
import { readDirectory } from '@/lib/fs';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getAllSlugs = async (): Promise<string[]> => {
  const postFileNames = await readDirectory(postsDirectory);

  const slugs = postFileNames.map((postFileName) => {
    if (!/\.md$/.test(postFileName)) {
      throw new Error('Invalid file type');
    }

    return postFileName.replace(/\.md$/, '');
  });

  return slugs;
};
