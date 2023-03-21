import Link from 'next/link';
import { useState } from 'react';
import Tag from './Tag';
import { Post } from '@/types/Post';

type Props = {
  post: Post;
};

const PostItem = ({
  post: { date, description, slug, tags, title },
}: Props) => {
  const [canBeBold, setCanBeBold] = useState(true);
  return (
    <div
      className={`group w-full rounded-2xl bg-gray-50 ${
        canBeBold ? 'hover:opacity-75' : ''
      }`}
    >
      <Link
        href={`/posts/${slug}`}
        passHref={true}
        className={`mb-1 flex flex-col items-start py-6 px-8 ${
          canBeBold ? 'focus:opacity-75' : ''
        }`}
      >
        <div className="mb-1 w-full border-b border-gray-300 pb-1">
          <div className="mb-1">{date}</div>
          <div
            className={`text-xl sm:text-lg ${
              canBeBold ? 'group-hover:underline group-focus:underline' : ''
            }`}
          >
            {title}
          </div>
          <div className="line-clamp-2">{description}</div>
        </div>
        <ul className="flex gap-x-2">
          {tags.map((tag) => (
            <li
              key={tag}
              onMouseEnter={() => setCanBeBold(false)}
              onMouseLeave={() => setCanBeBold(true)}
              onFocus={() => setCanBeBold(false)}
            >
              <object>
                <Tag name={tag} />
              </object>
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default PostItem;
