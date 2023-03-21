import Link from 'next/link';

type Props = {
  name: string;
};

const Tag = ({ name }: Props) => {
  const tagNameForUrl = name.replace(/ +/g, '-').toLowerCase();

  return (
    <Link
      href={`/posts/tags/${tagNameForUrl}`}
      className="text-nord-9 hover:underline focus:underline"
    >
      #{tagNameForUrl}
    </Link>
  );
};

export default Tag;
