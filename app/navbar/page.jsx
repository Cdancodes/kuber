
"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import Brand from "@/public/assets/brand.png";
import Image from "next/image";
import Header from "../header/page";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navLinks = [
        { title: "Home", path: "/" },
        { title: "Necklaces", path: "/necklace" },
        { title: "Bracelet", path: "/bracelet" },
        { title: "Rings", path: "/ring" },
        { title: "Pendent", path: "/pendent" },
        { title: "Ankle Bracelets", path: "/ankle" },
        { title: "All", path: "/all" },
        { title: "Track My Order", path: "/" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    return (

        <nav
            className="w-full z-50 transition-all duration-300 bg-gradient-to-r from-BrownDark via-BrownMid to-BrownDark fixed overflow-hidden"
        >
            <Header />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.path}
                                className="text-white dark:text-gray-200 hover:text-goldMid px-3 py-2 rounded-md text-sm font-semibold hover:scale-125 transition-transform duration-200"
                            >
                                {link.title}
                            </a>
                        ))}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <FaSun className="h-5 w-5 text-yellow-500" />
                            ) : (
                                <FaMoon className="h-5 w-5 text-slate-50" />
                            )}
                        </button>
                    </div>

                    <div className="md:hidden flex items-center justify-between w-full bg-gradient-to-r from-BrownDark via-BrownMid to-BrownDark">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                            aria-label="Toggle dark mode"
                        >
                            {isDarkMode ? (
                                <FaSun className="h-5 w-5 text-yellow-500" />
                            ) : (
                                <FaMoon className="h-5 w-5 text-gray-700" />
                            )}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <FaTimes className="h-6 w-6 text-white" />
                            ) : (
                                <FaBars className="h-6 w-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden fixed inset-0 z-40 h-full bg-goldMid transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="w-full justify-between flex items-center p-4 bg-gradient-to-r from-BrownDark via-BrownMid to-BrownDark bg-BrownMid">
                    <div>
                        <Image
                            src={Brand}
                            alt="brand"
                            layout="responsive"
                            width={100}
                            height={100}
                            className="h-[200px] w-[200px]"
                        />
                    </div>
                    <RxCross2
                        onClick={() => setIsOpen(!open)}
                        className="text-white h-6 w-6 font-bold" />
                </div>

                <div className="flex flex-col h-full py-5 px-4 bg-BrownDark">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.path}
                            onClick={toggleMenu}
                            className="px-3 py-4 text-lg font-medium border-b border-gray-200 dark:border-white 
                                  hover:scale-110 hover:text-[#CFA500] hover:font-semibold 
                                  hover:drop-shadow-[0_0_5px_#CFA500]
                                  transition-transform duration-300 ease-in-out text-white"
                        >
                            {link.title}
                        </a>

                    ))}f
                </div>
            </div>
        </nav>
    );
};

export default Navbar;