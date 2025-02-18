
"use client";

import React from 'react';
import Carousel from './carousel/page';
import Categories from './categories/page';
import About from './about/About';
import Testimonial from './testimonial/Testimonial';
import Spotted from './components/spotted/Spotted';
import FeatureBanner from './featureBanner/page';
import Trendy from './trendy/Trendy';

const page = () => {
  return (
    <div className='pt-20 sm:pt-36'>
      <Carousel />
      <Categories />
      <FeatureBanner />
      <Trendy />
      <Spotted />
      <Testimonial />
      <About />
    </div>
  )
}

export default page