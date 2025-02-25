"use client";

import Image from "next/image";

const CarouselImg = ({ Img }) => {
  return (
    <div className="relative  overflow-hidden mt-[5.3rem] sm:mt-44">
      <Image
        src={Img}
        alt="Carousel image"
        layout="responsive"
        sizes="(max-width: 640px) 100vw, 
               (max-width: 768px) 100vw,
               (max-width: 1024px) 100vw,
               (max-width: 1280px) 100vw,
               100vw"
        priority
        className="object-cover object-center"
      />
    </div>
  );
};

export default CarouselImg;