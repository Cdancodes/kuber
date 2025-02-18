"use client";

import Image from "next/image";

const CarouselImg = ({ Img }) => {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[80vh] overflow-hidden">
      <Image
        src={Img}
        alt="Carousel image"
        fill
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