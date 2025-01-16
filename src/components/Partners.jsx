import React from "react";
import content from "../data/content.json"; // Adjust the path as necessary

export default function Partners() {
  const partnersContent = content.partners;

  return (
    <div className="w-full pt-20 flex flex-col justify-center items-center gap-y-24">
      <p className="text-yellow">{partnersContent.sectionTitle}</p>
      <h2 className="text-h2 font-bold leading-[5rem] text-center">
        {partnersContent.heading}
      </h2>
      <div className="w-full bg-green-100 py-16">
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-x-40 gap-y-12">
          {partnersContent.partnersList.map((partner, index) => (
            <li
              key={index}
              className="flex flex-col justify-center items-center gap-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-green-200">
                <img
                  src={partner.logo}
                  alt={`${partner.brandName} logo`}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <p className="text-2xl font-bold text-green-200">
                {partner.brandName}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
