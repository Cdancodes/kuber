
"use client";

import Image from 'next/image';
import React from 'react';
import simg1 from '@/public/assets/categories/img1.png';
import simg2 from '@/public/assets/categories/img2.png';
import simg3 from '@/public/assets/categories/img3.png';
import simg4 from '@/public/assets/categories/img4.png';
import Limg1 from '@/public/assets/categories/Limg1.png';
import Limg2 from '@/public/assets/categories/Limg2.png';
import PageHeading from '../components/pageTitle/PageTitle';

const page = () => {

  const data = [
    { id: 1, title: "Earrings" },
    { id: 2, title: "Necklace" },
    { id: 3, title: "Bracelet" },
    { id: 4, title: "Bangles" },
  ];

  const sty = "w-full h-full object-cover object-center block hover:scale-105 inline-block transition-transform duration-200";

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center w-full">

        <div className="flex w-full mb-20 justify-center text-center flex-col">

          <PageHeading title="Shop By Categories" />

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-4 text-center">
                {data?.map((item) => (
                  <div key={item.id} className="p-4 sm:w-1/4 w-1/2">
                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 relative group">
                      <span className="relative inline-block">
                        {item.title}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-defaultColor transition-all duration-300 group-hover:w-full"
                          style={{ marginBottom: '3px' }}>
                        </span>
                      </span>
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="w-full justify-center flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className={sty}
                height={100}
                width={100}
                layout='responsive'
                src={Limg1} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className={sty}
                height={100}
                width={100}
                layout='responsive'
                src={simg1} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className={sty}
                height={100}
                layout='responsive'
                width={100}
                src={simg2} />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className={sty}
                height={100}
                layout='responsive'
                width={100}
                src={simg1} />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className={sty}
                height={100}
                layout='responsive'
                width={100}
                src={simg2} />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className={sty}
                height={100}
                layout='responsive'
                width={100}
                src={Limg2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page