
"use client";

import React from 'react';
import Carousel from './carousel/page';
import Categories from './categories/page';

const page = () => {
  return (
    <div className='pt-36'>
     <Carousel />
     <Categories />
    </div>
  )
}

export default page