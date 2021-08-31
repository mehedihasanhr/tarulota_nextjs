import Image from "next/image";
import React, { useState } from "react";

import Carousel from 'react-bootstrap/Carousel'

interface ICarousel {
  Images: {img:string}[];
}

const CustomCarousel = ({ Images }: ICarousel) => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (
    selectedIndex: number,
    e: Record<string, unknown> | null
  ) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      {Images.map((el, idx) => (
        <Carousel.Item key={idx}>
          <Image
            src={el.img}
            alt={`slider-${idx}`}
            width={960}
            height={520}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
