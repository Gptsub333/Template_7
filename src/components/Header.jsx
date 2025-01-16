import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiClose } from "react-icons/tfi";
import { IconContext } from "react-icons";
import content from "../data/content.json"; // Adjust the path as necessary

export default function Header() {
  const [headerMenu, setHeaderMenu] = useState(false);
  const [headerPos, setHeaderPos] = useState(false);

  const toggleHeader = () => {
    setHeaderMenu(!headerMenu);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      setHeaderPos(true);
    } else {
      setHeaderPos(false);
    }
  });

  return (
    <div className="fixed z-50 w-full">
      <div className="w-full bg-green-100 flex flex-row justify-center items-center">
        <div className="w-full max-w-[120rem] flex flex-row justify-start items-center px-8 lg:px-20 py-4">
          <ul className="flex flex-col lg:flex-row justify-center items-start lg:items-center lg:gap-x-[6rem] text-white/60">
            {content.header.contactInfo.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>

          <ul className="ml-auto flex flex-row justify-center items-center gap-x-[1.5rem] lg:gap-x-[3rem]">
            {content.header.socialIcons.map((icon, index) => {
              const IconComponent = {
                FaFacebookF: FaFacebookF,
                BsTwitter: BsTwitter,
                GrInstagram: GrInstagram,
                GrLinkedinOption: GrLinkedinOption,
              }[icon.type];

              return (
                <li className="cursor-pointer" key={index}>
                  <IconContext.Provider value={{ style: icon.style }}>
                    <a
                      href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent />
                    </a>
                  </IconContext.Provider>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className={`w-full flex flex-row justify-center items-center ${
          headerPos
            ? "bg-green-100/20 backdrop-blur-md"
            : "bg-transparent backdrop-blur-none"
        } transition-all duration-200`}
      >
        <header className="relative w-full max-w-[120rem] flex flex-row justify-start items-center px-8 lg:px-20 py-8">
          <div className="cursor-pointer">
            <img
              src={content.header.logo.src}
              alt={content.header.logo.alt}
              className="w-full h-8 lg:h-full"
            />
          </div>

          <div
            className="lg:hidden ml-auto cursor-pointer"
            onClick={toggleHeader}
          >
            <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
              <RxHamburgerMenu />
            </IconContext.Provider>
          </div>

          <ul
            className={`absolute left-0 ${
              headerMenu ? "-top-16" : "-top-[25rem]"
            } lg:static w-full lg:w-fit ml-auto flex flex-col lg:flex-row justify-center items-center 
            gap-x-[1.5rem] lg:gap-x-[3rem] gap-y-[1.5rem] py-8 lg:py-0 bg-green-100/20 lg:bg-transparent
            backdrop-blur lg:backdrop-blur-none transition-all duration-[300ms]`}
          >
            <li
              className="lg:hidden py-8 cursor-pointer"
              onClick={toggleHeader}
            >
              <IconContext.Provider value={{ color: "white" }}>
                <TfiClose />
              </IconContext.Provider>
            </li>
            {content.header.menuItems.map((item, index) => (
              <li
                className="text-white/60 hover:text-white transition duration-200 cursor-pointer"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </header>
      </div>
    </div>
  );
}
