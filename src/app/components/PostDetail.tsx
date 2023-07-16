import Image from 'next/image';
import { Post } from '../../../service/posts';
import { AiTwotoneCalendar } from 'react-icons/ai';
import Markdown from '@/components/Markdown';

type Props = {
  postData: Post;
  post: string;
};
export default function PostDetail({ postData, post }: Props) {
  const { id, createAt, title, subTitle, description, category, images } =
    postData;
  console.log('post: ', post);

  return (
    <section className="w-full bg-zinc-100 rounded-lg ">
      <Image
        src={`/images/${images}`}
        width={300}
        height={100}
        alt="card"
        className="w-full h-36 rounded-lg"
      />

      <div className="p-2">
        <div className="mt-2 flex justify-end pr-2 items-center text-[8px] text-sky-600">
          <AiTwotoneCalendar />
          <p className="text-right text-[8px] ml-1 ">{createAt}</p>
        </div>
        <div className="mb-1">
          <div className="h-5 font-semibold text-lg py-0">{title}</div>
          <div className="text-sm p-0 m-0">{description}</div>
        </div>
        <Markdown post={post} />
      </div>
    </section>
  );
}
