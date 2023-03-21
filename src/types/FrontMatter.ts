/* eslint-disable @typescript-eslint/no-unused-vars */
export type FrontMatter = {
  date: string;
  description: string;
  draft: boolean;
  expiryDate: string | null;
  lastMod: string | null;
  tags: string[];
  title: string;
};

export const isFrontMatter = (arg: unknown): arg is FrontMatter => {
  const postMetaData = arg as FrontMatter;
  return (
    typeof postMetaData?.date === 'string' &&
    typeof postMetaData?.description === 'string' &&
    typeof postMetaData?.draft === 'boolean' &&
    (typeof postMetaData?.expiryDate === 'string' ||
      postMetaData?.expiryDate === null) &&
    (typeof postMetaData?.lastMod === 'string' ||
      postMetaData?.expiryDate === null) &&
    postMetaData?.tags?.every((tag) => typeof tag === 'string') &&
    typeof postMetaData?.title === 'string'
  );
};
