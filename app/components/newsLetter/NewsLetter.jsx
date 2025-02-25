import React from "react";
import PageTitle from "../pageTitle/PageTitle";
import CustomButton from "../customButton/CustomButton";


const NewsLetter = () => {
  return (
    <section className="text-gray-600 body-font w-full">
      <div className="mx-auto">
        <div className="relative w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full pr-12 pl-4 py-2 border rounded-full focus:outline-none"
          />
          <button className="absolute inset-y-0 right-0 px-4 text-white bg-BrownMid rounded-r-full">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
