import Posts from '@/components/Posts';
import { getPostDataAll } from '../../../service/posts';

type Props = {};
export default async function page({}: Props) {
  const posts = await getPostDataAll();
  return <Posts posts={posts} />;
}
