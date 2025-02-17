
"use client"

import React from 'react';
import AboutImg from '@/public/assets/about/aboutImg.png';
import Image from 'next/image';
import CustomButton from '../components/customButton/CustomButton';

const About = () => {
    return (
        <section className="bg-BrownDark body-font">
            <div className="mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image
                        src={AboutImg}
                        alt="hero"
                        height={100}
                        width={100}
                        layout='responsive'
                        className="object-cover object-center rounded hover:scale-110 inline-block transition-transform duration-200"
                    />
                </div>
                <div className="flex mx-auto flex-col justify-center items-center text-center w-full lg:w-1/2 px-4">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 text-white">About Us</h1>
                    <p className="mb-8 leading-relaxed text-white">
                        At Purity, we strive to deliver excellence, consistently. We've brought to the market a whole new standard of business ethics and product reliability.
                    </p>
                    <div className="flex justify-center">
                        <CustomButton title="View More" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About