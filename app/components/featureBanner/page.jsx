
"use client"

import React from 'react';
import icon1 from '@/public/assets/icons/money.png';
import icon2 from '@/public/assets/icons/privacy.png';
import icon3 from '@/public/assets/icons/van.png';
import Image from 'next/image';

const page = () => {

  const data = [
    { img: icon1, title: 'Shipping Worldwide', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { img: icon2, title: 'Secure Payment', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { img: icon3, title: 'Free Shipping', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
  ]

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data?.map((item, i) => (
            <div key={i} className="p-4 md:w-1/3 flex-col justify-center hover:scale-110 inline-block transition-transform duration-200">
              <div className="flex rounded-lg h-full bg-gray-50 p-8 flex-col justify-center text-center">
                <div className="flex justify-center items-center mb-3">
                  <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0">
                    <Image src={item.img} alt="img" height={100} width={100} layout="responsive" />
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">{item.title}</p>
                  <p className="mt-3 inline-flex items-center">
                    {item.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default page