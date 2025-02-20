
"use client";

import React from 'react';
import CarouselImg from '../components/carouselimg/page';
import carImg from '@/public/assets/bracelets/Cimg.png';
import Accordion from '../components/according/page';
import Card from '../components/cards/page';


import img1 from '@/public/assets/bracelets/br1.jpg';
import img2 from '@/public/assets/bracelets/br2.jpg';
import img3 from '@/public/assets/bracelets/br3.jpg';
import img4 from '@/public/assets/bracelets/img4.png';
import img5 from '@/public/assets/bracelets/img5.png';
import img6 from '@/public/assets/bracelets/img6.png';
import img7 from '@/public/assets/bracelets/img7.png';
import img8 from '@/public/assets/bracelets/img8.png';
import img9 from '@/public/assets/bracelets/img9.png';
import img10 from '@/public/assets/bracelets/img10.png';
import img11 from '@/public/assets/bracelets/img11.png';
import img12 from '@/public/assets/bracelets/img12.png';
import img13 from '@/public/assets/bracelets/img13.png';
import img14 from '@/public/assets/bracelets/img14.png';
import img15 from '@/public/assets/bracelets/img15.png';


const Bracelet = () => {

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

        <div className='w-full h-full mx-auto bg-white'>

            <div className='w-full'>
                <CarouselImg Img={carImg} />
            </div>

            <section className="w-full min-h-screen pb-16">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <div className="w-full lg:w-1/4">
                            <div className="sticky top-4">
                                <Accordion />
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="w-full lg:w-3/4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

export default Bracelet