"use client";

import React from "react";
import Image from "next/image";
import img1 from "@/public/assets/Trendy/img1.png";
import img2 from "@/public/assets/Trendy/img2.png";
import img3 from "@/public/assets/Trendy/img3.png";
import img4 from "@/public/assets/Trendy/img4.png";
import PageTitle from "../components/pageTitle/PageTitle";

const Trendy = () => {
    const data = [
        { img: img1, alt: "Image 1", title: "Cable Chain Chokar" },
        { img: img2, alt: "Image 2", title: "Link Chain Earrings" },
        { img: img3, alt: "Image 3", title: "Yona Signet Ring" },
        { img: img4, alt: "Image 4", title: "Anna Ribbed Bangle" },
    ];

    return (
        <section className="container px-5 py-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <PageTitle title="Trendy Collection" />
            </div>
            <div className="flex flex-wrap -m-4">
                {data.map((item, i) => (
                    <div key={i} className="p-4 lg:w-1/4 md:w-1/2">
                        <div className="h-full flex flex-col items-center text-center">
                            <Image
                                src={item.img}
                                alt={item.alt}
                                width={200}
                                height={200}
                                layout="responsive"
                                className="rounded-lg object-cover hover:scale-110 inline-block transition-transform duration-200"
                            />
                            <h2 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Trendy;
