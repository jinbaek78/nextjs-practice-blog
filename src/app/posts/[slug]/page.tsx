import PostDetail from '@/app/components/PostDetail';
import {
  Post,
  getPost,
  getPostData,
  getPostDataAll,
} from '../../../../service/posts';
import NotFound from './not-found';
type Props = {
  params: {
    slug: string;
  };
};
export default async function page({ params: { slug } }: Props) {
  const postIds = (await getPostDataAll()).map((post) => post.id);

  if (!postIds.includes(slug)) {
    return <NotFound />;
  }

  const postMetadata = getPostData(slug);
  const postContent = getPost(slug);
  const [postData, post] = await Promise.all([postMetadata, postContent]);

  let nextPostData, previousPostData;
  if (postData.previousId) {
    previousPostData = getPostData(postData.previousId);
  }
  if (postData.nextId) {
    nextPostData = getPostData(postData.nextId);
  }
  const [previousData, nextData] = await Promise.all([
    previousPostData,
    nextPostData,
  ]);

  return (
    <PostDetail
      postData={postData}
      post={post}
      previous={previousData}
      next={nextData}
    />
  );
}

export async function generateStaticParams() {
  const posts: Post[] = await getPostDataAll();
  return posts.map(({ id }) => ({
    slug: id,
  }));
}
