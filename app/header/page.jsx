
"use client"

import React from 'react';
import brand from '@/public/assets/brand.png'
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import Image from 'next/image';

const Header = () => {
    const [cartCount, setCartCount] = React.useState(0);

    const sty = "text-slate-50 h-6 w-6";
    const iconsty = "cursor-pointer h-5 w-5 text-defaultColor";

    return (
        <header className="body-font hidden md:block bg-gradient-to-r from-BlackDark via-MidDark to-BlackDark">
            <div className="container mx-auto flex flex-wrap px-8 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900">
                    <Image
                        src={brand}
                        alt='brand'
                        height={80}
                        layout='responsive'
                        className='h-20 w-20'
                        width={80} />
                </a>
                <nav className="mx-auto w-[50%] flex items-center justify-center">
                    <div className="relative w-full">
                        {/* Search Input */}
                        <input
                            type="text"
                            id="search"
                            name="search"
                            placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                            className="w-full text-base outline-none text-gray-700 py-2 px-4 pr-12 leading-8 transition-colors duration-200 ease-in-out bg-slate-50 rounded-md"
                        />

                        {/* Icons inside search bar */}
                        <div className="absolute inset-y-0 right-2 flex items-center space-x-2 text-gray-500">
                            <FaMicrophone className={iconsty} />
                            <IoSearch className={iconsty} />
                        </div>
                    </div>
                </nav>


                <div className='flex space-x-2 justify-center items-center'>
                    <FaRegHeart className={sty} />
                    <div className="border-l-2 border-white h-5"></div>
                    <IoIosContact className={sty} />
                    <div className="border-l-2 border-white h-5"></div>
                    <TiShoppingCart className={sty} />
                </div>
            </div>
        </header>
    )
}

export default Header