import React from "react";
import { ImTruck } from "react-icons/im";
import content from "../data/content.json"; // Adjust path as necessary

export default function Quote() {
  const quoteContent = content.quote;

  const IconComponent = {
    ImTruck: ImTruck,
  }[quoteContent.button.icon];

  return (
    <div className="w-full pt-40 flex flex-col justify-center items-center">
      <div
        className="w-full max-w-[120rem] flex flex-row justify-start items-center px-8 lg:px-20 
        py-8 gap-x-[10rem]"
      >
        <div className="flex flex-col justify-center items-start gap-y-12">
          <p className="text-yellow">{quoteContent.sectionTitle}</p>
          <h2 className="text-h2 font-bold leading-[5rem]">
            {quoteContent.heading}
          </h2>
          <button
            className="text-black font-semibold bg-yellow flex flex-row justify-center items-center gap-x-4
          px-12 py-4 rounded-2xl"
          >
            <IconComponent />
            {quoteContent.button.text}
          </button>
        </div>
        <div className="hidden md:block">
          <img src={quoteContent.image.src} alt={quoteContent.image.alt} />
        </div>
      </div>
    </div>
  );
}
