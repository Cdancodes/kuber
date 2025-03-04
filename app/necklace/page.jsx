
"use client";

import React from 'react';
import CarouselImg from '../components/carouselimg/page';
import carImg from '@/public/assets/necklaces/Cimg.png';
import Accordion from '../components/according/page';
import Card from '../components/cards/page';


import img1 from '@/public/assets/necklaces/imgneck1.jpg';
import img2 from '@/public/assets/necklaces/neck2.jpg';
import img3 from '@/public/assets/necklaces/neck3.jpg';
import img4 from '@/public/assets/necklaces/neck4.jpg';
import img5 from '@/public/assets/necklaces/img5.png';
import img6 from '@/public/assets/necklaces/img6.png';
import img7 from '@/public/assets/necklaces/img7.png';
import img8 from '@/public/assets/necklaces/img8.png';
import img9 from '@/public/assets/necklaces/img9.png';
import img10 from '@/public/assets/necklaces/img10.png';
import img11 from '@/public/assets/necklaces/img11.png';
import img12 from '@/public/assets/necklaces/img12.png';
import img13 from '@/public/assets/necklaces/img13.png';
import img14 from '@/public/assets/necklaces/img14.png';
import img15 from '@/public/assets/necklaces/img15.png';


const Neckles = () => {

    const images = [
        { img: img1, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img2, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img3, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img4, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img5, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img6, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img7, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img8, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img9, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img10, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img11, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img12, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img13, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img14, title: 'Hecklace', desc: "White Gold 14 K" },
        { img: img15, title: 'Hecklace', desc: "White Gold 14 K" }
    ]

    return (

        <div className='w-full  min-h-[800px]  mx-auto bg-white'>

                <CarouselImg Img={carImg} />
         

            <section className="w-full pb-16">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8 justify-center">
                       
                        <div className="w-full lg:w-3/4 py-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                                {images.map((item, index) => (
                                    <Card key={index} img={item.img} title={item.title} desc={item.desc} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Neckles