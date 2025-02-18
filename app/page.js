
"use client";

import React from 'react';
import Carousel from './carousel/page';
// import Categories from './components/categories/categories';
import Categories from "./components/categories/page";
import About from './components/about/About';
import Testimonial from './components/testimonial/Testimonial';
import Spotted from './components/spotted/Spotted';
import FeatureBanner from './components/featureBanner/page';
import Trendy from './components/trendy/Trendy';
import Occasion from './components/occasion/Ocassion';

const page = () => {
  return (
    <div className='pt-20 sm:pt-36'>
      <Carousel />
      <Categories />
      <FeatureBanner />
      <Trendy />
      <Occasion />
      <Spotted />
      <Testimonial />
      <About />
    </div>
  )
}

export default page