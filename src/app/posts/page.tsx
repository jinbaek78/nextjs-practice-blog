import { getPosts } from '../../../service/posts';
import PostCard from '../components/PostCard';

type Props = {};
export default async function page({}: Props) {
  const posts = await getPosts();
  return (
    <div>
      <ul className="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
}
