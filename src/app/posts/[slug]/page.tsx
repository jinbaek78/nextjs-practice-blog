type Props = {
  params: {
    slug: string;
  };
};
export default function page({ params: { slug } }: Props) {
  return <div>pages/ {slug}</div>;
}
