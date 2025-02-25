
"use client";

import Image from 'next/image';
import React from 'react';
import simg1 from '@/public/assets/categories/img1.png';
import simg2 from '@/public/assets/categories/img2.png';
import simg3 from '@/public/assets/categories/img3.png';
import simg4 from '@/public/assets/categories/img4.png';
import Limg1 from '@/public/assets/categories/Limg1.png';
import Limg2 from '@/public/assets/categories/Limg2.png';
import PageHeading from '../pageTitle/PageTitle';

const page = () => {

  const sty = "w-full h-full object-cover object-center block hover:scale-95 inline-block transition-transform duration-200";

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center w-full">

        <div className="flex w-full my-20 justify-center text-center flex-col">
          <PageHeading title="Shop By Categories" />
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