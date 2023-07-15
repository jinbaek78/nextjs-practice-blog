'use client';

import PostCard from '@/app/components/PostCard';
import { Post } from '../../service/posts';
import { MouseEvent, useState } from 'react';

type Props = {
  posts: Post[];
};

type Category =
  | 'All Posts'
  | 'my story'
  | 'frontend'
  | 'backend'
  | 'javascript';

export default function Posts({ posts }: Props) {
  const [category, setCategory] = useState('All Posts');
  const sortedPosts =
    category === 'All Posts'
      ? posts
      : posts.filter((post) => post.category === category);

  const defaultStyle = 'hover:text-sky-400 cursor-pointer';
  const highlight = 'text-sky-400';
  const allPostStyle =
    category === 'All Posts' ? `${defaultStyle} ${highlight}` : defaultStyle;

  const myStoryStyle =
    category === 'my story' ? `${defaultStyle} ${highlight}` : defaultStyle;

  const frontendStyle =
    category === 'frontend' ? `${defaultStyle} ${highlight}` : defaultStyle;

  const backendStyle =
    category === 'backend' ? `${defaultStyle} ${highlight}` : defaultStyle;

  const javascriptStyle =
    category === 'javascript' ? `${defaultStyle} ${highlight}` : defaultStyle;

  const handleCategoryClick = (e: MouseEvent<HTMLElement>) => {
    if (!e.target) {
      return;
    }

    setCategory((e.target as HTMLSpanElement).textContent!);
  };
  return (
    <div className="flex">
      <ul className=" basis-9/12 grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5">
        {sortedPosts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </ul>
      <div className="basis-3/12 flex flex-col items-center ">
        <h2 className="font-semibold text-xs border-b border-sky-400">
          Category
        </h2>
        <div
          className="flex flex-col text-[10px] mt-1"
          onClick={handleCategoryClick}
        >
          <span className={allPostStyle}>All Posts</span>
          <span className={myStoryStyle}>my story</span>
          <span className={frontendStyle}>frontend</span>
          <span className={backendStyle}>backend</span>
          <span className={javascriptStyle}>javascript</span>
        </div>
      </div>
    </div>
  );
}
