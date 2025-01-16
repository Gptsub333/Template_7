import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import content from "../data/content.json"; // Adjust the path as necessary

export default function Footer() {
  const footerContent = content.footer;

  const SocialIcons = {
    FaFacebookF: FaFacebookF,
    BsTwitter: BsTwitter,
    GrInstagram: GrInstagram,
    GrLinkedinOption: GrLinkedinOption,
  };

  return (
    <div className="w-full bg-green-100 py-20 flex flex-col justify-center items-center">
      <footer
        className="w-full max-w-[120rem] flex flex-col lg:flex-row justify-start items-start px-8 lg:px-20 
        py-8 gap-x-[10rem] gap-y-[5rem]"
      >
        <div className="flex flex-col justify-center items-start gap-y-[4rem]">
          <img src={footerContent.logo.src} alt={footerContent.logo.alt} />
          <h2 className="text-xl uppercase">{footerContent.about.title}</h2>
          <p className="max-w-[15rem] leading-loose text-white/60">
            {footerContent.about.description}
          </p>
        </div>

        <ul className="flex flex-col justify-center items-start gap-y-[1rem] text-white/60">
          <h2 className="text-xl uppercase text-white pb-[2rem]">
            {footerContent.navigation.title}
          </h2>
          {footerContent.navigation.links.map((link, index) => (
            <li key={index} className="cursor-pointer">
              {link}
            </li>
          ))}
        </ul>

        <ul className="flex flex-col justify-center items-start gap-y-[1rem] text-white/60">
          <h2 className="text-xl uppercase text-white pb-[2rem]">
            {footerContent.otherLinks.title}
          </h2>
          {footerContent.otherLinks.links.map((link, index) => (
            <li key={index} className="cursor-pointer">
              {link}
            </li>
          ))}
        </ul>

        <div className="flex flex-col justify-center items-start gap-y-[1rem] text-white/60">
          <h2 className="text-xl uppercase text-white pb-[2rem]">
            {footerContent.social.title}
          </h2>
          <ul className="flex flex-row justify-start items-center gap-x-[2rem]">
            {footerContent.social.icons.map((icon, index) => {
              const IconComponent = SocialIcons[icon.type];
              return (
                <li key={index} className="cursor-pointer">
                  <a href={icon.link} target="_blank" rel="noopener noreferrer">
                    <IconComponent />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </footer>
      <p className="text-white/60">{footerContent.copyright}</p>
    </div>
  );
}
