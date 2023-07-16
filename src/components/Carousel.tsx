'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Props = {
  children: React.ReactNode;
};
export default function Carousel({ children }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3500,
  };

  return <Slider {...settings}>{children}</Slider>;
}
