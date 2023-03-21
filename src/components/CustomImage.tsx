import Image from 'next/image';

type Props = {
  alt?: string;
  height?: number;
  width?: number;
  src: string;
};

const CustomImage = ({ alt, height, src, width }: Props) => {
  const isInnerImage = src.startsWith('/');

  return isInnerImage ? (
    <Image src={src} height={height} width={width} alt={alt ? alt : ''}></Image>
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt ? alt : ''} />
  );
};

export default CustomImage;
