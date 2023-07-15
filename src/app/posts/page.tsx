import Posts from '@/components/Posts';
import { getPosts } from '../../../service/posts';
import PostCard from '../components/PostCard';

type Props = {};
export default async function page({}: Props) {
  const posts = await getPosts();
  // sortedPosts
  return <Posts posts={posts} />;
}
