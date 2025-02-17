import React from 'react';
import Image from 'next/image';
import Img1 from '@/public/assets/purity/img1.png';
import Img2 from '@/public/assets/purity/img2.png';
import Img3 from '@/public/assets/purity/img3.png';
import Img4 from '@/public/assets/purity/img4.png';
import Img5 from '@/public/assets/purity/img5.png';
import PageTitle from '../pageTitle/PageTitle';


const Purity = () => {

    const data = [
        { img: Img1, alt: "Image 1" },
        { img: Img2, alt: "Image 2" },
        { img: Img3, alt: "Image 3" },
        { img: Img4, alt: "Image 4" },
        { img: Img5, alt: "Image 5" },
    ]

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">

                <PageTitle title="Purity on Instagram" />

                <div className="flex flex-wrap mt-4">
                    {data?.map((item, i) => (
                        <div key={i} className="lg:w-1/5 md:w-1/2 p-4 w-full ">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    height={100}
                                    layout='responsive'
                                    width={100}
                                    className="object-cover object-center w-full h-full hover:scale-110 inline-block transition-transform duration-200 hover:shadow-xl"
                                    src={item.img} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Purity