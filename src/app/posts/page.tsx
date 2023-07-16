import Posts from '@/components/Posts';
import { getPostDatasData } from '../../../service/posts';
import PostCard from '../components/PostCard';

type Props = {};
export default async function page({}: Props) {
  const posts = await getPostDatasData();
  // sortedPosts
  return <Posts posts={posts} />;
}
