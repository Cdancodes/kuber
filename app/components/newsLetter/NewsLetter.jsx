
"use client"

import React from 'react';
import PageTitle from '../pageTitle/PageTitle';
import CustomButton from '../customButton/CustomButton';

const NewsLetter = () => {
    return (
        <section className="text-gray-600 body-font w-full">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full space-y-5">
                    <PageTitle title="Newsletter" />
                    <p className="lg:w-2/3 mx-auto text-xl leading-relaxed">Sign-up to receive 10% off your next purchase. Plus hear about new arrivals and offers.</p>
                </div>
                <div className="flex justify-center sm:items-center md:items-center lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end py-8">
                    <div className="relative flex-grow w-full">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder='Enter your email'
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out justify-center flex text-center" />
                    </div>
                    <CustomButton title="Subscribe" />
                </div>
            </div>
        </section>
    )
}

export default NewsLetter