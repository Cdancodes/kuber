"use client";

// import Img from "@/public/assets/carousel/bimg.png";
import Image from "next/image";
import { Antic_Slab, Poppins } from "next/font/google";
// import CustomButton from "../components/customButton/CustomButton";
// import Gimg from '@/public/assets/carousel/Cimg.png';
import manbgimg from '@/public/assets/carousel/manbgimg.png';
import sideimage from '@/public/assets/carousel/sideimage.png';
import { motion } from 'framer-motion';

const anticSlab = Antic_Slab({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200"],
  variable: "--font-poppins",
});

const Carousel = () => {



  return (
    <div className='relative w-full lg:px-16 pt-28 md:pt-0 md:px-10'>
      {/* Background Image Container with Next.js Image */}
      <div className="hidden md:block absolute inset-0 w-full h-[74vh] -z-10">
        <Image
          src={manbgimg}
          alt="Background"
          layout="responsive"
          // fill
          // priority
          height={100}
          width={100}
          className="object-cover "
          sizes="100vw"
          quality={90}
        />
      </div>

      <div className="relative text-gray-600 body-font h-[74vh] w-full flex items-center justify-center">
        <section className="w-full text-gray-600 body-font">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-5 md:px-10 lg:px-16 md:gap-4 lg:gap-0">
            {/* Left Content with Animation */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="md:w-1/2 w-full z-20 text-center flex flex-col items-center md:items-start mb-10 md:mb-0 md:text-left pt-32"
            >
              <h1 className={`${anticSlab.className} title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-anticSlab`}>
                IMPECCABLE CRAFTSMANSHIP 
                <br className="hidden lg:inline-block" />AND FINESSE
              </h1>
              <p className="mb-8 leading-relaxed max-w-md text-defaultColor sm:text-[#787054]">
                An example of intricate workmanship and details, elegant necklaces and long and short chains form a part of our desirable collection.
              </p>

              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(255, 183, 0, 0.7)" }}
                whileTap={{ scale: 0.9 }}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none 
              hover:bg-indigo-600 rounded-full text-lg bg-gradient-to-r from-[#FFB700] to-[#dba51c] shadow-lg 
              shadow-yellow-500/50"
              >
                Explore Now
              </motion.button>
            </motion.div>

            {/* Right Image with Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="md:w-1/2 w-full flex justify-center md:justify-end text-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-[50vh] md:h-[45vh] lg:h-[65vh] w-full md:w-auto"
              >
                <Image
                  src={sideimage}
                  alt="Hero"
                  layout='responsive'
                  height={100}
                  width={100}
                  className="object-cover rounded z-10"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Carousel;