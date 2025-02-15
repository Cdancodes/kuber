"use client";

import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiSolidPlane, BiSupport } from 'react-icons/bi';
import { AiOutlineReload } from 'react-icons/ai';
import { MdPrivacyTip } from 'react-icons/md';

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
    { title: "Home", path: "#" },
    { title: "Necklaces", path: "#" },
    { title: "Bracelets", path: "#" },
    { title: "Rings", path: "#" },
    { title: "Earrings", path: "#" },
    { title: "Ankle Bracelets", path: "#" },
    { title: "All", path: "#" },
  ];

  const services = [
    { icon: <BiSolidPlane className="w-8 h-8 md:w-10 md:h-10 text-defaultColor" />, title: "FREE TRACKED DELIVERY" },
    { icon: <AiOutlineReload className="w-8 h-8 md:w-10 md:h-10 text-defaultColor" />, title: "QUICK RETURNS AND EXCHANGE" },
    { icon: <BiSupport className="w-8 h-8 md:w-10 md:h-10 text-defaultColor" />, title: "24X7 CUSTOMER SERVICE" },
    { icon: <MdPrivacyTip className="w-8 h-8 md:w-10 md:h-10 text-defaultColor" />, title: "100% SECURE PAYMENT" },
  ];

  return (
    <footer className="relative text-gray-600 bg-footerColor w-full">
      {/* Services Banner */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%]">
        <div className="bg-gradient-to-r from-goldMid via-goldMid to-goldDark p-4 md:p-6 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center justify-center py-3 group">
                  <div className='mx-3 flex flex-col items-center justify-center py-3 space-y-4 group'>
                    <div className="transform group-hover:scale-110 transition-transform duration-200 text-slate-50 cursor-pointer">
                      {service.icon}
                    </div>
                    <h2 className="text-xs md:text-xs text-slate-50 text-center font-medium">
                      {service.title}
                    </h2>
                  </div>
                  {i !== services.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-14 w-px bg-white" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h2 className="font-semibold text-BrownMid tracking-widest text-md">MY ACCOUNT</h2>
            <p className="text-sm leading-6 text-slate-50 hover:scale-105 inline-block transition-transform duration-200 hover:text-goldMid cursor-pointer">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <div className="flex flex-wrap gap-3">
              {SocialIcons.map((item, i) => (
                <button
                  key={i}
                  className="p-3 border border-slate-500 rounded-full hover:bg-goldMid hover:border-goldMid hover:text-white transition-all duration-200 group"
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
                  <a className="text-gray-600 hover:scale-110 inline-block transition-transform duration-200 hover:text-goldMid cursor-pointer">
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
                  <a className="text-slate-50 hover:scale-110 inline-block transition-transform duration-200 hover:text-goldMid cursor-pointer">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="font-semibold text-BrownMid tracking-widest text-md mb-6">ABOUT US</h2>
            <div className="space-y-3 flex flex-col">
              <p className="text-slate-50 hover:text-BrownMid hover:scale-110 inline-block transition-transform duration-200 hover:text-goldMid cursor-pointer">
                <strong>Email: </strong> berra_jewel@gmail.com
              </p>
              <p className="text-slate-50 hover:scale-110 inline-block transition-transform duration-200 hover:text-BrownMid cursor-pointer">
                <strong>Phone: </strong> +91 123456789
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;