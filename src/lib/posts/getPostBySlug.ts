import path from 'path';
import grayMatter from 'gray-matter';
import rehypePrism from 'rehype-prism-plus';
import rehypeStringify from 'rehype-stringify';
import remarkEmoji from 'remark-emoji';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { readFile } from '@/lib/fs';
import { Post } from '@/types/Post';

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = await readFile(fullPath);

  const matterResult = grayMatter(fileContent);

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkEmoji)
    .use(remarkRehype)
    .use(rehypePrism, { showLineNumbers: true })
    .use(rehypeStringify)
    .process(fileContent);

  const post = {
    content: processedContent.toString(),
    slug,
    ...matterResult.data,
  } as Post;

  return post;
};
