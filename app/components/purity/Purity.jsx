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
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-10 mx-auto">

                <PageTitle title="Purity on Instagram" />

                <div class="flex flex-wrap mt-4">
                    {data?.map((item, i) => (
                        <div key={i} class="lg:w-1/5 md:w-1/2 p-4 w-full">
                            <a class="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    height={100}
                                    width={100}
                                    class="object-cover object-center w-full h-full block"
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