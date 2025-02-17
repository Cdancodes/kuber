
"use client";

import Img from "@/public/assets/carousel/bimg.png";
import Image from "next/image";
import { Antic_Slab, Poppins } from "next/font/google";
import CustomButton from "../components/customButton/CustomButton";
import Gimg from '@/public/assets/carousel/Cimg.png';

const anticSlab = Antic_Slab({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200"],
  variable: "--font-poppins",
});

const Carousel = () => {

  return (
    <div
      className="relative w-full group"
    >
      <div
        className="w-full transition-transform duration-500 ease-out"
      >
        <Image
          src={Img}
          alt="img"
          layout="responsive"
          height={100}
          width={100}
          loading="lazy"
          className="hidden md:block lg:block sm:block"
        />

        <div className="absolute inset-0">
          <div className="absolute justify-center items-center flex left-0 w-full top-1/2 transform -translate-y-1/2 space-y-4">

            <div className="w-1/2 p-4 space-y-4">
              <h2 className={`${anticSlab.className} text-3xl md:text-5xl font-grandiflora mb-0 md:mb-4 text-defaultColor leading-tight md:leading-[3rem]`}>
                IMPECCABLE
                <span className="block md:my-4">CRAFTSMANSHIP AND</span>
                FINESSE
              </h2>

              <p className={` ${poppins.className} w-[70%] break-words text-xs md:text-sm text-[#787054] font-light tracking-wider`}>
                An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
              </p>

              <CustomButton
                title="Explore Now"
              />
            </div>

            <div className="w-[20%] h-[20%]">
              <Image src={Gimg} alt="img" layout='responsive' width={100} height={100} className="mx-auto" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
