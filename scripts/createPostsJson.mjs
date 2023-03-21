import fs from 'fs';
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
import { visit } from 'unist-util-visit';
import imageSize from 'image-size';

const rehypeImageSize = () => {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (
        node.tagName === 'img' &&
        typeof node?.properties?.src === 'string' &&
        node.properties.src.startsWith('/')
      ) {
        const { src } = node.properties;
        const { height, width } = imageSize(path.join('public', src));
        node.properties.height = height;
        node.properties.width = width;
      }
    });
  };
};

const postsDirectory = path.join(process.cwd(), 'posts');

const allPostsData = fs.readdirSync(postsDirectory).map(async (fileName) => {
  if (!/\.md$/.test(fileName)) {
    throw new Error('Markdown file is only allowed');
  }

  const fileContent = fs.readFileSync(path.join(postsDirectory, fileName));
  const matterResult = grayMatter(fileContent);
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkGfm)
    .use(remarkEmoji)
    .use(remarkRehype)
    .use(rehypePrism, { showLineNumbers: true })
    .use(rehypeImageSize)
    .use(rehypeStringify)
    .process(fileContent);

  const post = {
    content: processedContent.toString(),
    slug: fileName.replace(/.md$/, ''),
    ...matterResult.data,
  };

  return post;
});

const dataDirectory = path.join(process.cwd(), 'data');
Promise.all(allPostsData).then((result) => {
  fs.writeFileSync(
    path.join(dataDirectory, 'postsData.json'),
    JSON.stringify(result),
  );
});
