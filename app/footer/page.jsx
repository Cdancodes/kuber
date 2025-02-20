"use client";

import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import NewsLetter from '../components/newsLetter/NewsLetter';
import Purity from '../components/purity/Purity';
import Link from "next/link";

const Footer = () => {

  const SocialIcons = [
    { icon: <FaFacebookF className="h-5 w-5" />, title: "Facebook" },
    { icon: <FaLinkedinIn className="h-5 w-5" />, title: "Linkedin" },
    { icon: <FaTwitter className="h-5 w-5" />, title: "Twitter" },
    {
      icon: (
        <a href="https://www.instagram.com/beerajewellers/?hl=en" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram className="h-5 w-5" />
        </a>
      ),
      title: "Instagram"
    }
  ];

  const NavItems = [
    { title: "Home", path: "/" },
    { title: "Necklaces", path: "/necklace" },
    { title: "Bracelet", path: "/bracelet" },
    { title: "Rings", path: "/rings" },
    { title: "Pendent", path: "/pendent" },
    { title: "Ankle Bracelets", path: "/ankle" }
  ];

  // const services = [
  //   { icon: <BiSolidPlane className="w-8 h-8 md:w-10 md:h-10 text-defaultColor" />, title: "FREE TRACKED DELIVERY" },
  //   { icon: <AiOutlineReload className="w-8 h-8 md:w-10 md:h-10 text-defaultColor" />, title: "QUICK RETURNS AND EXCHANGE" },
  //   { icon: <BiSupport className="w-8 h-8 md:w-10 md:h-10 text-defaultColor" />, title: "24X7 CUSTOMER SERVICE" },
  //   { icon: <MdPrivacyTip className="w-8 h-8 md:w-10 md:h-10 text-defaultColor" />, title: "100% SECURE PAYMENT" },
  // ];

  const sty = "text-slate-50 hover:text-BrownMid hover:scale-110 inline-block transition-transform duration-200 hover:text-goldMid cursor-pointer"

  return (
    <footer className="relative text-gray-600  w-full">

      <Purity />

      <NewsLetter />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h2 className="font-semibold text-BrownMid tracking-widest text-md">MY ACCOUNT</h2>
            <p className="text-sm leading-6 text-slate-50 hover:scale-105 inline-block transition-transform duration-200 hover:text-goldMid cursor-pointer whitespace-normal break-all">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>

            <div className="flex flex-wrap gap-3">
              {SocialIcons.map((item, i) => (
                <button
                  key={i}
                  className={` p-3 border border-slate-500 rounded-full ${sty}`}
                >
                  <span className="flex justify-center group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Menu Section */}
          <div>
            <h2 className="font-semibold text-BrownMid tracking-widest text-md mb-6">MENU</h2>
            <ul className="space-y-3">
              {NavItems.map((item, i) => (
                <li key={i}>
                  <a className={sty}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div>
            <h2 className="font-semibold text-BrownMid tracking-widest text-md mb-6">FOLLOW US ON</h2>
            <ul className="space-y-3">
              {SocialIcons.map((item, i) => (
                <li key={i}>
                  <a className={sty}>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className='w-full flex flex-col space-y-4'>
            <div>
              <h2 className="font-semibold text-BrownMid tracking-widest text-md mb-6">ABOUT US</h2>
              <div className="space-y-3 flex flex-col">
                <p className={sty}>
                  <strong>Email: </strong>kuberdiamond7@gmail.com
                </p>
                <p className={sty}>
                  <strong>Phone: </strong>+91 99994 14148
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-BrownMid tracking-widest text-md mb-6">
                SERVICES
              </h2>
              <ul>
                <li className={sty}>
                  <Link href="/terms">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;