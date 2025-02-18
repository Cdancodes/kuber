"use client"

import React from 'react';
import Rectangle67 from '@/public/assets/spotted/Rectangle67.png';
import Rectangle68 from '@/public/assets/spotted/Rectangle68.png';
import Rectangle69 from '@/public/assets/spotted/Rectangle69.png';
import PageTitle from '../pageTitle/PageTitle';
import Image from 'next/image';

const spottedData = [
    { src: Rectangle67, text: "" },
    { src: Rectangle68, text: "" },
    { src: Rectangle69, text: "" }
];

const Spotted = () => {
    return (
        <div className='w-full px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16'>
            {/* Title Section */}
            <div className="mb-8 sm:mb-12">
                <PageTitle title="Spotted on" />
            </div>

            {/* Grid Section */}
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {spottedData.map((item, index) => (
                        <div 
                            key={index} 
                            className="group w-full transition-all duration-300 ease-in-out"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg 
                                          border-2 border-gray-200 border-opacity-60 
                                          shadow-lg transition-all duration-300 ease-in-out
                                          group-hover:shadow-xl group-hover:scale-[1.02]"
                            >
                                <Image 
                                    alt={`Spotted image ${index + 1}`}
                                    src={item.src}
                                    layout='responsive'
                                    sizes="(max-width: 640px) 90vw, 
                                           (max-width: 1024px) 45vw, 
                                           30vw"
                                    className="object-cover object-center"
                                    priority={index === 0}
                                />
                            </div>

                            {/* Optional Text */}
                            {item.text && (
                                <p className="mt-4 text-base text-center font-medium text-gray-800">
                                    {item.text}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Spotted;