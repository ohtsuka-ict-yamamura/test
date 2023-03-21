import PostItem from '@/components/PostItem';
import { Post } from '@/types/Post';

type Props = {
  posts: Post[];
};

const PostList = ({ posts }: Props) => (
  <ul className="flex w-full flex-col gap-y-2 md:gap-y-4">
    {posts.map((post) => (
      <li key={post.slug}>
        <PostItem post={post} />
      </li>
    ))}
  </ul>
);

export default PostList;
