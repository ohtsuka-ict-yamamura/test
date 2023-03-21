import React from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import { unified } from 'unified';
import CustomImage from '@/components/CustomImage';
import CustomLink from '@/components/CustomLink';

export const htmlToReactComponents = (html: string) => {
  const processedContent = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        a: CustomLink,
        img: CustomImage,
      },
    })
    .processSync(html);

  return processedContent.result;
};
