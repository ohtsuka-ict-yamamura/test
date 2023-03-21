import Image from 'next/image';
import React, { useContext, useState } from 'react';
import { usePostsContext } from '@/hooks/usePostsContext';
import Tag from './Tag';

type Props = {
  open: boolean;
};

const Search = ({ open }: Props) => {
  const [searchValue, setSearchValue] = useState<string>();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  const PostsContext = usePostsContext();
  const posts = useContext(PostsContext);

  const postsIncludingKeywords = posts.filter((post) => {
    if (searchValue === undefined) return;

    return (
      new RegExp(post.title, 'i').test(searchValue) ||
      post.content.includes(searchValue)
    );
  });

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center overflow-y-scroll bg-nord-3 text-nord-6 opacity-90 ${
        open ? '' : 'hidden'
      }`}
    >
      <div className="relative top-40 mx-20 w-full max-w-3xl pb-20 text-xl">
        <div className="mb-8 flex justify-between border-b border-nord-6">
          <input
            type="search"
            placeholder="キーワードで記事を探す"
            value={searchValue}
            onChange={onChangeHandler}
            className="w-full bg-nord-3 text-nord-6 outline-none"
          ></input>
          <Image src="/assets/search_nord6.svg" alt="" width={24} height={24} />
        </div>
        {searchValue === undefined ||
        searchValue === '' ||
        /^\s+$/.test(searchValue) ? (
          <ul className="mb-8 flex flex-wrap justify-center gap-x-4">
            <Tag name="React" />
            <Tag name="Node.js" />
            <Tag name="Next.js" />
            <Tag name="AWS" />
            <Tag name="textlint" />
            <Tag name="Husky" />
            <Tag name="Git" />
            <Tag name="GitHub" />
            <Tag name="ESLint" />
            <Tag name="Prettier" />
            <Tag name="Google Apps Script" />
            <Tag name="English" />
            <Tag name="Testing Library" />
            <Tag name="Visual Studio Code" />
          </ul>
        ) : (
          <div className="flex flex-col gap-y-4 text-nord-6">
            {postsIncludingKeywords.map((post) => (
              <div key={post.slug} className="text-center">
                <div className="">{post.title}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
