
// "use client"

import Image from 'next/image';
import React from 'react';

const Page = ({ img, title, desc }) => {
    return (
        <div className="w-full bg-goldDark p-2 hover:scale-105 transition-transform duration-200 hover:shadow-xl bg-slate-100 rounded-md">
            <div className="relative aspect-square w-full overflow-hidden rounded">
                <Image
                    alt="ecommerce"
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                />
            </div>
            <div className="bg-goldDark p-4">
                <h2 className="text-slate-950 text-sm tracking-widest">
                    {title}
                </h2>
                <p className="text-slate-950 text-xs font-thin tracking-widest">{desc}</p>
            </div>
        </div>
    )
}

export default Page