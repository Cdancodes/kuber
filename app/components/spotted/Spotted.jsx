"use client";

import React from "react";
import Image from "next/image";
import img1 from "@/public/assets/spotted/img1.png";
import img2 from "@/public/assets/spotted/img2.png";
import img3 from "@/public/assets/spotted/img3.png";
import PageTitle from "../pageTitle/PageTitle";


const Spotted = () => {
    return (
        <section className="w-full h-full flex flex-col justify-center sm:py-8 md:py-10">
            <div className="text-center w-full mb-6 sm:mb-8 md:mb-10">
                <PageTitle title="Spotted on" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-1 sm:gap-2 md:gap-3 mx-auto">

                <div
                    className="flex items-center justify-center p-2 hover:scale-105 transition-transform duration-300"
                >
                    <div className="relative w-full aspect-square">
                        <Image
                            src={img1}
                            alt="img"
                            layout="responsive"
                            height={100}
                            width={100}
                            className="w-full "
                        />
                    </div>
                </div>

                <div
                    className="flex items-center justify-center p-2 hover:scale-105 transition-transform duration-300"
                >
                    <div className="relative w-full aspect-square">
                        <Image
                            src={img1}
                            alt="img"
                            layout="responsive"
                            height={100}
                            width={100}
                        />
                    </div>
                </div>

                <div
                    className="flex items-center p-2 hover:scale-105 transition-transform duration-300"
                >
                    <div className="relative w-full aspect-square">
                        <Image
                            src={img1}
                            alt="img"
                            layout="responsive"
                            height={100}
                            width={100}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Spotted;
