"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import User from "@/public/assets/Owner/user.jpg";
import Image from "next/image";
import PageTitle from "../components/pageTitle/PageTitle";
const GameHero = () => {
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Detect Safari Browser
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(
      navigator.userAgent
    );
    setIsSafari(isSafariBrowser);
  }, []);

  const fontSty = "text-slate-500 font-medium cursor-pointer hover:text-slate-700 font-serif leading-8 tracking-wider"

  return (
    <div>
      <div className="relative w-full min-h-screen overflow-hidden bg-[#FAF9F6] mt-16">
        {/* Background Media */}
        <div className="absolute inset-0">
          {/* Blur Overlay */}
          <div className="absolute inset-0 backdrop-blur-[0px]"></div>

          {/* Use URL instead of import */}
          {isSafari ? (
            <img
              src="/assets/video/about.mp4" // Reference directly
              alt="Safari Background"
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/video/about.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Curved Bottom Shape */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1 z-10">
          <svg
            viewBox="0 0 1440 320"
            className="w-full block"
            preserveAspectRatio="none"
            style={{
              filter: "drop-shadow(0px -2px 1px rgba(250, 249, 246, 0.3))",
              marginBottom: "-2px",
            }}
          >
            <path fill="#FFFFFF" d="M0,160L1440,160L1440,320L0,320Z"></path>
          </svg>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-200px)]">
            <div className="w-full lg:w-2/3 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white max-w-8xl">
                  About Us
                </h1>
                {/* <hr /> */}
                <p className="text-2xl text-white mb-8 max-w-6xl mx-auto">
                  “Jewellery is more than an accessory; it’s an emotion.”
                </p>
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {/* <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-greenColor rounded-full text-customBodyColor font-medium text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Get Started
                </Link> */}
                </motion.div>
              </motion.div>

              {/* Floating Elements */}
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto">
          <div className="flex space-y-10 lg:w-3/5 mx-auto border-b pb-10  border-gray-200  flex-col">

          <PageTitle title="About Us" />
          <hr className="border-2 border-b-slate-400 rounded-full"/>

          <section className="text-gray-600 body-font">
              <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="p-4 w-full">
                    <div className="h-full bg-gray-100 p-8 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="block w-5 h-5 text-gray-400 mb-4"
                        viewBox="0 0 975.036 975.036"
                      >
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                      </svg>

                      <a className="inline-flex items-center ">
                        <div className="flex justify-center items-center h-[100px] w-[100px] rounded-full border border-slate-400 p-4">
                          <Image
                            src={User}
                            alt="User"
                            layout="responsive"
                            className="rounded-full object-cover transform scale-x-[-1]"
                            height={100}
                            width={100}
                          />
                        </div>

                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font font-medium text-gray-900">
                            Mr. Saurabh Jain
                          </span>
                          <span className="text-gray-500 text-sm">
                            FOUNDER AND CHAIRMAN
                          </span>
                        </span>
                      </a>

                      <p className={`${fontSty} my-5 `}>
                        <strong>Mr. Saurabh Jain, Founder & Chairman</strong> of Kuber Diamonds,
                        Kuber Jewellery, and Diamella, is a visionary leader
                        shaping the future of the luxury jewellery industry.
                      </p>

                      <strong>Bio</strong>
                      <hr className="border-2 rounded-full border-b-slate-300 mb-3" />
                      <p className="italic text-sm leading-6 tracking-wider">
                        <b>Mr. Saurabh Jain</b> was born in Sonipat, where he
                        completed his early schooling before continuing his
                        education in Jaipur. He pursued gemology at{" "}
                        <strong> Nagoya University ( Japan )</strong>, equipping
                        himself with in-depth knowledge of the diamond and
                        jewellery industry. In 2005, he began his journey in the
                        business world from Surat, a global hub for diamond
                        trade. A year later, in 2006, he established Kuber
                        Diamonds, laying the foundation for a remarkable
                        entrepreneurial legacy. By 2007, Kuber had expanded into
                        a well-recognized brand, marking its strong presence
                        with a business setup in Karol Bagh, Delhi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <p className={fontSty}>
              At Kuber Diamond Jewelry, we believe that every piece of jewelry
              tells a story—a story of elegance, craftsmanship, and timeless
              beauty. Founded with a passion for creating exquisite diamond
              jewelry, we pride ourselves on offering high-quality, meticulously
              crafted pieces designed to make you feel extraordinary.
            </p>

            <p className={fontSty}>
              Our collection is a perfect blend of tradition and innovation,
              where classic designs meet modern trends. Whether you're looking
              for the perfect engagement ring, a statement necklace, or a gift
              for a loved one, Kuber Diamond Jewelry is dedicated to bringing
              you a curated selection of fine jewelry for every occasion.
            </p>

            <p className={fontSty}>
              Each diamond we use is ethically sourced and carefully selected to
              ensure brilliance and quality. Our expert jewelers and craftsmen
              put their heart into creating stunning, lasting pieces that stand
              the test of time.
            </p>

            <p className={fontSty}>
              We are committed to delivering not only the finest jewelry but
              also an unforgettable shopping experience. With personalized
              customer service, exceptional craftsmanship, and a legacy built on
              trust, we are here to make your most cherished moments shine
              brighter
            </p>
          

            <div className="cursor-pointer">
              <h1 className="font-bold text-xl ">Our Services</h1>
              <hr className="my-2 border-2 border-b-slate-400 rounded-full w-[30%]" />
              <p className={fontSty}>
                Customisation & Personalisation Craft a unique piece that tells
                your story – from engravings to bespoke designs. Virtual Try-On
                & Consultation Try before you buy with our augmented reality
                tool or book a free video consultation with our experts. Buyback
                & Exchange Enjoy lifetime exchange, easy returns, and
                transparent buyback policies. Customer Engagement & Blog.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameHero;
