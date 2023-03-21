import * as fs from '@/lib/fs';
import { getAllSlugs } from '@/lib/posts/getAllSlugs';

jest.mock('@/lib/fs', (): unknown => {
  return {
    __esModule: true,
    ...jest.requireActual('@/lib/fs'),
    readDirectory: jest.fn(),
  };
});

describe('getAllSlugs', () => {
  test('should return file names without ".md" as slug', async () => {
    // arrange
    jest
      .spyOn(fs, 'readDirectory')
      .mockReturnValue(Promise.resolve(['post-1.md', 'post-2.md']));

    // act
    const slugs = await getAllSlugs();

    // assert
    expect(slugs).toEqual(['post-1', 'post-2']);
  });

  test('should throw an error if there are any files excluding Markdown files', async () => {
    // arrange
    jest
      .spyOn(fs, 'readDirectory')
      .mockReturnValue(Promise.resolve(['post-1.md', 'post-2.txt']));

    // act, assert
    await expect(() => getAllSlugs()).rejects.toThrow();
  });
});
