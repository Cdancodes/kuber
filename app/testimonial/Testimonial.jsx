
"use client"

import React from 'react';
import Img1 from '@/public/assets/testimonial/selena.png';
import Img2 from '@/public/assets/testimonial/bf.png';
import Image from 'next/image';

const Testimonial = () => {

    const details = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies metus eu euismod tincidunt. Aliquam sit amet sapien non nisl tempor convallis eu in enim.";

    const data = [
        { img: Img1, name: 'Ann Smith', profile: 'CEO & Founder', dd: details },
        { img: Img2, name: 'Edison', profile: 'Designer', dd: details },
        { img: Img1, name: 'Ann Smith', profile: 'CEO & Founder', dd: details }
    ];

    return (
        <section className="text-gray-600 body-font px-5">
            <div className="container px-8 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {data?.map((item, i) => (
                        <div key={i} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full flex flex-col justify-center text-center hover:scale-110 inline-block transition-transform duration-200 space-y-2">
                                <div className='w-20 h-20 mx-auto'>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        layout="responsive"
                                        height={100}
                                        width={100}
                                        className="w-5 h-5 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                    />
                                </div>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-xs">
                                    {item.name}
                                </h2>
                                <p className="text-[#666666] text-sm">{item.profile}</p>
                                <p className="leading-relaxed text-defaultColor text-xs">{item.dd}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonial