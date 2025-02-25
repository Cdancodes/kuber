"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillInstagram, AiOutlineReload } from "react-icons/ai";
import { BiSolidPlane, BiSupport } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Purity from "../components/purity/Purity";

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const SocialIcons = [
    {
      icon: FaFacebookF,
      title: "Facebook",
      link: "https://www.facebook.com/yourfacebookpage",
    },
    {
      icon: FaLinkedinIn,
      title: "Linkedin",
      link: "https://www.linkedin.com/in/yourlinkedinpage",
    },
    {
      icon: FaTwitter,
      title: "Twitter",
      link: "https://www.twitter.com/yourtwitterpage",
    },
    {
      icon: AiFillInstagram,
      title: "Instagram",
      link: "https://www.instagram.com/kuberdiamond/",
    },
  ];

  const NavItems = [
    { title: "Home", path: "/" },
    { title: "Necklaces", path: "/necklace" },
    { title: "Bracelet", path: "/bracelet" },
    { title: "Rings", path: "/rings" },
    { title: "Mangalsutra", path: "/mangalsutra" },
    { title: "Ankle Bracelets", path: "/ankle" },
  ];

  const features = [
    { title: "Find our stores near you" },
    { title: "24/7 Customer Support" },
    { title: "Live Chat & Assistance" },
  ];

  const dd = [
    { title: "100% Certified Gold & Diamonds" },
    { title: "100% Authentic Genuine Jewelry" },
    { title: "Worldwide Shipping" },
  ];

  const sty =
    "text-slate-50 hover:text-BrownMid hover:scale-105 inline-block transition-transform duration-200 hover:text-goldMid cursor-pointer";

  const stytext =
    "text-white hover:text-BrownMid hover:scale-105 inline-block transition-transform duration-200";

  return (
    <footer className="relative text-gray-600 w-full">
      {mounted && (
        <>
          {/* <Purity /> */}
          {/* <NewsLetter /> */}

          <div className="mx-auto px-[8%] pt-32 pb-16 bg-footerColor">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
              {/* About Section */}
              <div className="space-y-6">
                <h2 className="font-semibold text-BrownMid tracking-widest text-md">
                  MY ACCOUNT
                </h2>
                <div className="flex flex-wrap gap-3">
                  {SocialIcons.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="p-3 border border-white hover:border-slate-50 rounded-full hover:bg-BrownMid"
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer "
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </a>
                      </div>
                    );
                  })}
                </div>
                <div>
                  <ul className="space-y-3">
                    {dd?.map((item, i) => (
                      <li key={i}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className={sty}
                        >
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <NewsLetter />
              </div>

              {/* Menu Section */}
              <div className="flex flex-col justify-center items-start md:items-center">
                <ul className="space-y-3">
                <h2 className="font-semibold text-BrownMid tracking-widest text-md mb-6 mt-0  md:-mt-[20px]">
                  MENU
                </h2>
                  {NavItems.map((item, i) => (
                    <li key={i}>
                      <Link href={item.path} className={sty}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links Section */}
              <div>
                <h2 className="font-semibold text-BrownMid tracking-widest text-md mb-6">
                  STORE LOCATOR
                </h2>
                <ul className="space-y-3">
                  {features?.map((item, i) => (
                    <li key={i}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={sty}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Section */}
              <div className="flex flex-col space-y-4">
                <div>
                  <h2 className="font-semibold text-BrownMid tracking-widest text-md mb-6">
                    ABOUT US
                  </h2>
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
                  <ul className="flex flex-col space-y-3">
                    <li className={sty}>
                      <Link href="/terms">Terms & Conditions</Link>
                    </li>
                    <li className={sty}>
                      <Link href="/aboutUs">About-Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </footer>
  );
};

export default Footer;
