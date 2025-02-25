
"use client"

import React from "react";
import Image from "next/image";
import Img1 from "@/public/assets/ankle/Bangle2.jpg";
import Img2 from "@/public/assets/Earing/Earrings4.jpg";
import Img3 from "@/public/assets/Pendent/Mangalsutra1.jpg";
import Img4 from "@/public/assets/Ring/Ring1.jpg";
import Img5 from "@/public/assets/Earing/Earrings2.jpg";
import Img6 from "@/public/assets/ankle/Bangle4.jpg";
import Img7 from "@/public/assets/Earing/Earrings1.jpg";
import Img8 from "@/public/assets/Ring/Ring3.jpg";
// import Img9 from '@/public/assets/bracelets/Bracelet3.jpg';
// import Img10 from '@/public/assets/Ring/img15.png';
import PageTitle from "../pageTitle/PageTitle";
import { useRouter } from "next/navigation";

const Purity = () => {
  const router = useRouter()

  const data = [
    { img: Img1, alt: "Image 1", title: "Bangle", path:"/ankle" },
    { img: Img2, alt: "Image 2", title: "Earring", path:"/earrings" },
    { img: Img3, alt: "Image 3", title: "Mangalsutra", path:"/mangalsutra" },
    { img: Img4, alt: "Image 4", title: "Ring", path:"/rings" },
    { img: Img5, alt: "Image 5", title: "Earring", path:"/earrings" },
    { img: Img6, alt: "Image 6", title: "Bracelet", path:"/ankle" },
    { img: Img7, alt: "Image 7", title: "Earring", path:"/earrings" },
    { img: Img8, alt: "Image 8", title: "Ring", path:"/rings" },
    // { img: Img9, alt: "Image 9" },
    // { img: Img10, alt: "Image 10" },
  ];

  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16">
    <div className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
      <PageTitle title="Purity on Instagram" />
    </div>

    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {data?.map((item, i) => (
          <div 
          key={i}
          onClick={() => router.push(`/${item.path.replace(/^\/+/, '')}`)} 
          className="group w-full p-2 sm:p-3 md:p-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg mb-4">
              <Image
                src={item.img}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 90vw, 
                                         (max-width: 1024px) 45vw, 
                                         25vw"
                className="object-cover object-center 
                                           transition-transform duration-300 ease-in-out
                                           group-hover:scale-110"
                priority={i === 0}
              />
            </div>
            <h2
                className="text-base sm:text-lg font-semibold text-gray-800 text-center 
                                         transition-colors duration-300 group-hover:text-defaultColor"
              >
                {item.title}
              </h2>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Purity;
