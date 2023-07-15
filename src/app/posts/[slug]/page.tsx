import { notFound } from 'next/navigation';

import { Post, getPosts } from '../../../../service/posts';

type Props = {
  params: {
    slug: string;
  };
};
export default async function page({ params: { slug } }: Props) {
  const postIds = (await getPosts()).map((post) => post.id);

  if (!postIds.includes(slug)) {
    notFound();
  }

  return <div>pages/ {slug}</div>;
}

export async function generateStaticParams() {
  const posts: Post[] = await getPosts();
  return posts.map(({ id }) => ({
    slug: id,
  }));
}
