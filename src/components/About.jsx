import React from "react";
import content from "../data/content.json"; // Adjust the path to match your folder structure

export default function About() {
  const aboutContent = content.about;

  return (
    <div className="w-full py-40 flex flex-col justify-center items-end">
      <div
        className="w-full max-w-[125rem] flex flex-col lg:flex-row justify-start lg:justify-end items-center pl-8 lg:pl-20 
        py-8"
      >
        <div className="w-full flex flex-col justify-center items-start gap-y-[4rem]">
          <p className="text-yellow">{aboutContent.sectionTitle}</p>
          <h2 className="text-h2 font-bold pr-16 leading-[5rem]">
            {aboutContent.heading}
          </h2>
          <p className="text-white/60 max-w-[35rem] leading-loose py-12 pr-16">
            {aboutContent.description}
          </p>
        </div>

        <div className="w-full relative">
          <div className="hidden 2xl:block absolute right-0 -top-[12rem]">
            <img src={aboutContent.image.src} alt={aboutContent.image.alt} />
          </div>
          <ul className="relative grid grid-cols-2 lg:grid-cols-3 gap-12 px-0 lg:px-24">
            {aboutContent.stats.map((stat, index) => (
              <li
                key={index}
                className="border-l-4 border-white flex flex-col justify-center items-start gap-y-6 px-6"
              >
                <p className="text-h2 font-bold text-yellow">{stat.value}</p>
                <p className="font-semibold">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
