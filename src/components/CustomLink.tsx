import Link from 'next/link';

type Props = {
  children: string;
  href: string;
};

const CustomLink = ({ href, children }: Props) => {
  const isInnerLink = href.startsWith('/');

  return isInnerLink ? (
    <Link href={href}>{children}</Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default CustomLink;
