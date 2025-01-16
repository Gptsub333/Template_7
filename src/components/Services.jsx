import React from "react";
import content from "../data/content.json"; // Adjust the path to match your folder structure

export default function Services() {
  const servicesContent = content.services;

  return (
    <div className="w-full pt-20 flex flex-col justify-center items-center">
      <div
        className="w-full max-w-[120rem] flex flex-col justify-center items-start px-8 lg:px-20 
        py-8 gap-y-[4rem]"
      >
        <p className="text-yellow">{servicesContent.sectionTitle}</p>
        <h2 className="text-h2 font-bold leading-[5rem]">
          {servicesContent.heading}
        </h2>
        <p className="text-white/60 max-w-[25rem]">
          {servicesContent.description}
        </p>

        <ul className="w-full max-w-[100rem] grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10">
          {servicesContent.cards.map((card) => (
            <li
              key={card.id}
              className="bg-green-100 flex flex-col justify-center items-start gap-y-8 rounded-2xl px-4
              lg:px-12 py-6 lg:py-12"
            >
              <h2 className="text-h2 text-yellow font-bold">{card.id}</h2>
              <p className="text-2xl font-bold">{card.title}</p>
              <p className="text-white/60 max-w-[20rem]">{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
