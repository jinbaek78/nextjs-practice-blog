import Image from 'next/image';
import { Post } from '../../../service/posts';
import Link from 'next/link';

type Props = {
  post: Post;
};
export default function PostCard({ post }: Props) {
  const { id, createAt, title, description, category, images } = post;

  return (
    <Link
      href={`/posts/${id}`}
      className="flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
    >
      <div className="3">
        <Image src={`/images/${images}`} width={300} height={100} alt="card" />
      </div>
      <div className="my-1 p-1">
        <div className="text-right text-[8px] text-zinc-500">{createAt}</div>
        <div className="flex flex-col justify-center items-center text-xs">
          <h2 className="font-semibold text-[9px]">{title}</h2>
          <h3 className="text-[8px]">{description}</h3>
          <div className=" rounded-lg px-1 bg-green-300 text-[8px]">
            {category}
          </div>
        </div>
      </div>
    </Link>
  );
}
