import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Post } from '../../../service/posts';

type Props = {
  next: Post | undefined;
  previous: Post | undefined;
};
export default function BackAndForth({ next, previous }: Props) {
  const hasPrevious = previous !== undefined;
  const hasNextId = next !== undefined;
  const previousImgeURL = `/images/${previous?.images}`;
  const nextImgeURL = `/images/${next?.images}`;
  return (
    <div className="w-full h-20 flex  rounded-b-md text-center text-white ">
      <button
        className="basis-1/2 flex justify-center items-center bg-cover bg-center rounded-es-md relative  disabled:bg-none disabled:blur-3xl disabled:pointer-events-none"
        style={{ backgroundImage: `url(${previousImgeURL})` }}
        disabled={!hasPrevious}
      >
        <Link href={`/posts/${previous?.id}`}>
          <FaArrowLeft className=" absolute left-3 text-yellow-300 text-2xl" />
          <div className="text-sm">
            <p className="h-4">{previous?.title}</p>
            <p className="text-xs">{previous?.description}</p>
          </div>
        </Link>
      </button>
      <button
        className="basis-1/2 flex justify-center items-center bg-cover bg-center rounded-ee-md relative disabled:bg-none disabled:blur-3xl disabled:pointer-events-none"
        style={{ backgroundImage: 'url(' + nextImgeURL + ')' }}
        disabled={!hasNextId}
      >
        <Link href={`/posts/${next?.id}`}>
          <FaArrowRight className="absolute right-3 text-yellow-300 text-2xl" />
          <div className="text-sm">
            <p className="h-4">{next?.title}</p>
            <p className="text-xs">{next?.description}</p>
          </div>
        </Link>
      </button>
    </div>
  );
}
