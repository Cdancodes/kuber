"use client";

// import Img from "@/public/assets/carousel/bimg.png";
import Image from "next/image";
import { Antic_Slab, Poppins } from "next/font/google";
// import CustomButton from "../components/customButton/CustomButton";
// import Gimg from '@/public/assets/carousel/Cimg.png';
import { useRouter } from "next/navigation";
import manbgimg from "@/public/assets/carousel/manbgimg.png";
import sideimage from "@/public/assets/carousel/sideimage.png";
import { motion } from "framer-motion";

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
  const router = useRouter();

  const stt =
    "text-xl leading-relaxed max-w-md text-defaultColor sm:text-[#787054] font-serif leading-8 tracking-wide";

    const tt = "text-sm my-1 "

  return (
    <div className="relative w-full lg:px-16 pt-28 md:pt-0 md:px-10">
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
          className="object-cover"
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
              className="md:w-1/2 w-full z-20 text-center flex flex-col items-center md:items-start mb-10 md:mb-0 md:text-left pt-20 "
            >
              <h1
                className={`${anticSlab.className} title-font sm:text-4xl text-2xl mt-10 mb-1 md:mb-6 font-bold text-gray-900 font-anticSlab`}
              >
                CELEBRATE EVERY MOMENT
                <br className="hidden lg:inline-block" />
                IN STYLE
              </h1>
              <p className={`${stt} hidden`}>
                Elevate Your Look with Our Handcrafted Jewelry.
              </p>

              <p className={tt}>
                Elegant Necklaces, Sparkling Rings, and Chic Bracelets –
                Tailored for You.
              </p>
              <p className={tt}> Crafted with Care, Our Designs Speak of Luxury and Class.</p>
              <p className={tt}>
                {" "}
                From Classic to Contemporary, We Have the Perfect Piece for
                Every Occasion.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 15px rgba(255, 183, 0, 0.7)",
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => router.push("/all")}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none 
              hover:bg-indigo-600 rounded-full text-lg bg-gradient-to-r from-[#FFB700] to-[#dba51c] shadow-lg 
              shadow-yellow-500/50 mt-4"
              >
                Read More...
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
                className="relative h-[50vh] md:h-[45vh] lg:h-[65vh] w-full md:w-auto pt-20 sm:pt-5"
              >
                <Image
                  src={sideimage}
                  alt="Hero"
                  layout="responsive"
                  height={100}
                  width={100}
                  className="object-cover rounded z-10 pt-2"
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
