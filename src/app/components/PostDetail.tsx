import Image from 'next/image';
import { Post } from '../../../service/posts';
import { AiTwotoneCalendar } from 'react-icons/ai';
import Markdown from '@/components/Markdown';
import BackAndForth from './BackAndForth';

type Props = {
  postData: Post;
  post: string;
  previous: Post | undefined;
  next: Post | undefined;
};
export default function PostDetail({ postData, post, previous, next }: Props) {
  const {
    id,
    createAt,
    title,
    subTitle,
    description,
    category,
    images,
    nextId,
    previousId,
  } = postData;

  return (
    <section className="w-full bg-zinc-100 rounded-md ">
      <Image
        src={`/images/${images}`}
        width={300}
        height={100}
        alt="card"
        className="w-full h-36 rounded-md"
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
      <BackAndForth next={next} previous={previous} />
    </section>
  );
}
