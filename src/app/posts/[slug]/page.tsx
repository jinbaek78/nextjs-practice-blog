import { Post, getPosts } from '../../../../service/posts';
import NotFound from './not-found';

type Props = {
  params: {
    slug: string;
  };
};
export default async function page({ params: { slug } }: Props) {
  const postIds = (await getPosts()).map((post) => post.id);

  if (!postIds.includes(slug)) {
    return <NotFound />;
  }

  return <div>pages/ {slug}</div>;
}

export async function generateStaticParams() {
  const posts: Post[] = await getPosts();
  return posts.map(({ id }) => ({
    slug: id,
  }));
}
