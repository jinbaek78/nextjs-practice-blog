import EmailForm from '@/components/EmailForm';
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';

type Props = {};
export default function page({}: Props) {
  return (
    <section className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-3 font-semibold">
        <h1 className="text-lg">Contact me</h1>
        <h5 className=" font-light text-xs">info@gamil.com</h5>
        <div className=" w-4/5 flex justify-evenly text-xl my-2">
          <BsGithub className=" cursor-pointer" />
          <BsLinkedin className=" cursor-pointer" />
          <BsYoutube className=" cursor-pointer" />
        </div>
      </div>
      <EmailForm />
    </section>
  );
}
