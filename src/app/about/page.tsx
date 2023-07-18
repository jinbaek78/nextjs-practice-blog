import Avatar from '../components/Avatar';

type Props = {};
export default function page({}: Props) {
  return (
    <div>
      <Avatar />
      <section className="bg-zinc-100 w-full p-2 py-3 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center my-2">
          <h2>Who am I?</h2>
          <p className="text-[10px]">
            I`m preparing to be an Frontend engineer
          </p>
        </div>
        <div className="flex flex-col justify-center items-center my-2">
          <h2>Career</h2>
          <p className="text-[10px]">It will be updated soon</p>
        </div>
        <div className="flex flex-col justify-center items-center my-2">
          <h2 className="">Skills</h2>
          <p className="text-[10px]">React</p>
          <p className="text-[10px]">Git, nextjs</p>
          <p className="text-[10px]">
            will be added: test code, aws, story book, atomic design,
            refactoring
          </p>
        </div>
      </section>
    </div>
  );
}
