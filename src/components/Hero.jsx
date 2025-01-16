import React from "react";
import { ImTruck } from "react-icons/im";
import { HiArrowRight } from "react-icons/hi";
import { IconContext } from "react-icons";
import content from "../data/content.json"; // Adjust path as necessary

export default function Hero() {
  const heroContent = content.hero;
  const ButtonIcons = {
    ImTruck: ImTruck,
    HiArrowRight: HiArrowRight,
  };

  return (
    <div className="w-full h-screen pt-20 flex flex-row justify-center lg:justify-end items-center">
      <div className="relative">
        <div className="absolute -left-[40rem] -top-[10rem]">
          <img
            src={heroContent.images.illustration}
            alt="Hero Illustration"
            className="w-full h-[50rem]"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start px-8 lg:px-20 gap-y-[4rem]">
          <h1
            className="w-full max-w-[50rem] text-3xl lg:text-[3.2rem] font-bold leading-[5rem]"
            dangerouslySetInnerHTML={{ __html: heroContent.heading }}
          ></h1>
          <p className="w-full max-w-[20rem] text-white/60">
            {heroContent.description}
          </p>
          <div className="flex flex-col lg:flex-row justify-start items-center gap-x-20 gap-y-8">
            <button className="flex flex-row justify-start items-center bg-yellow text-black font-medium px-10 py-3 rounded-2xl gap-x-4">
              <IconContext.Provider value={{ color: "black" }}>
                {React.createElement(
                  ButtonIcons[heroContent.buttons.quote.icon]
                )}
              </IconContext.Provider>
              <span>{heroContent.buttons.quote.text}</span>
            </button>
            <button className="flex flex-row justify-start items-center gap-x-8">
              {heroContent.buttons.learnMore.text}
              <span>
                {React.createElement(
                  ButtonIcons[heroContent.buttons.learnMore.icon]
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={heroContent.images.shipping} alt="Hero Shipping Image" />
      </div>
    </div>
  );
}
