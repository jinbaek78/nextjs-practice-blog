import Carousel from '@/components/Carousel';
import { Post, getPostDataAll } from '../../service/posts';
import Avatar from './components/Avatar';
import PostCard from './components/PostCard';

export default async function Home() {
  const posts = await getPostDataAll();
  // const featured = posts.filter(post => post.featured)
  // const notFeatured = posts.filter(post => !post.featured)
  const featured: Post[] = [];
  const notFeatured: Post[] = [];
  posts.forEach((post) => {
    if (post.featured) {
      featured.push(post);
      return;
    }
    notFeatured.push(post);
  });
  return (
    <div>
      <Avatar />
      <section className="my-3">
        <h2 className="my-1 font-semibold">Featured Posts</h2>
        <ul className=" \ grid grid-cols-3 gap-2 ">
          {featured.map((post: Post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </ul>
      </section>
      <section>
        <h2 className="my-1 font-semibold">You may like</h2>
        <Carousel>
          {notFeatured.map((post: Post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </Carousel>
      </section>
    </div>
  );
}
