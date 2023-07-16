import PostDetail from '@/app/components/PostDetail';
import {
  Post,
  getPost,
  getPostData,
  getPostDatasData,
} from '../../../../service/posts';
import NotFound from './not-found';
type Props = {
  params: {
    slug: string;
  };
};
export default async function page({ params: { slug } }: Props) {
  const postIds = (await getPostDatasData()).map((post) => post.id);

  if (!postIds.includes(slug)) {
    return <NotFound />;
  }
  // getArticle byId (read the file)
  //

  const postData = await getPostData(slug);
  const post = await getPost(slug);

  return <PostDetail postData={postData} post={post} />;
}

export async function generateStaticParams() {
  const posts: Post[] = await getPostDatasData();
  return posts.map(({ id }) => ({
    slug: id,
  }));
}
