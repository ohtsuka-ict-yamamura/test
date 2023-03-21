import { getAllPosts } from '@/lib/posts/getAllPosts';
import { getAllTags } from '@/lib/posts/getAllTags';

jest.mock('@/lib/posts/getAllPosts', () => {
  return {
    getAllPosts: jest.fn(),
  };
});

describe('getAllTags', () => {
  test('should return sorted tags in alphabetically', async () => {
    // arrange
    (getAllPosts as jest.Mock).mockReturnValue(
      Promise.resolve([
        {
          content: 'lorem',
          slug: 'post-1',
          date: '2023-1-17',
          description: 'lorem',
          draft: false,
          expiryDate: null,
          lastMod: null,
          tags: ['b'],
          title: 'title-1',
        },
        {
          content: 'lorem',
          slug: 'post-2',
          date: '2023-1-17',
          description: 'lorem',
          draft: false,
          expiryDate: null,
          lastMod: null,
          tags: ['a'],
          title: 'title-2',
        },
      ]),
    );

    // act
    const allTags = await getAllTags();

    // assert
    expect(allTags).toStrictEqual(['a', 'b']);
  });

  test('should return non duplicated tags', async () => {
    // arrange
    (getAllPosts as jest.Mock).mockReturnValue(
      Promise.resolve([
        {
          content: 'lorem',
          slug: 'post-1',
          date: '2023-1-17',
          description: 'lorem',
          draft: false,
          expiryDate: null,
          lastMod: null,
          tags: ['a'],
          title: 'title-1',
        },
        {
          content: 'lorem',
          slug: 'post-2',
          date: '2023-1-17',
          description: 'lorem',
          draft: false,
          expiryDate: null,
          lastMod: null,
          tags: ['a', 'b'],
          title: 'title-2',
        },
      ]),
    );

    // act
    const allTags = await getAllTags();

    // assert
    expect(allTags).toStrictEqual(['a', 'b']);
  });
});
