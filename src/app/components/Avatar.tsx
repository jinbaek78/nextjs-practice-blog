import Image from 'next/image';
import Link from 'next/link';

type Props = {};
export default function Avatar({}: Props) {
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <Image
        className="rounded-full"
        src="/images/roadwithsky.jpeg"
        alt="avatar"
        width={120}
        height={120}
      />
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-lg">Hi, I am Jin</h1>
        <h4 className="font-light text-sm">Frontend engineer</h4>
        <h5 className="font-light text-xs">a person who code my dream</h5>
      </div>
      <Link
        href={'/contact'}
        className="w-30 h-5 p-2 m-2 bg-yellow-500 rounded-lg flex justify-center items-center "
      >
        <button className="text-[10px] font-semibold">Contact Me</button>
      </Link>
    </section>
  );
}
