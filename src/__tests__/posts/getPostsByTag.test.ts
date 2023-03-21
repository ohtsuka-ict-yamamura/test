import { getAllPosts } from '@/lib/posts/getAllPosts';
import { getPostsByTag } from '@/lib/posts/getPostsByTag';

jest.mock('@/lib/posts/getAllPosts', () => {
  return {
    getAllPosts: jest.fn(),
  };
});

describe('getPostsByTag', () => {
  test('should return posts including specific tag', async () => {
    // arrange
    const dummyPosts = [
      {
        content: 'lorem',
        slug: 'post-1',
        date: '2023-1-17',
        description: 'lorem',
        draft: false,
        expiryDate: null,
        lastMod: null,
        tags: ['Markdown'],
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
        tags: ['React'],
        title: 'title-2',
      },
    ];

    (getAllPosts as jest.Mock).mockReturnValue(Promise.resolve(dummyPosts));

    // act
    const posts = await getPostsByTag('react');

    // asset
    expect(posts).toEqual([dummyPosts[1]]);
  });
});
