import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "www.youtube.com",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "www.github.com",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "www.instagram.com",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "www.linkdin.com",
    icon: <AiFillLinkedin className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLink01 = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];
const quickLink02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];
const quickLink03 = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="logo" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} developed by Md. Mahadi Hasan all rights
              reserved
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="rounded-full hover:border-none flex items-center justify-center group hover:bg-primaryColor  w-9 h-9 border border-solid border-[#181A1E]"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor mt-10">
              Quick Links
            </h2>
            <ul className="flex flex-col">
              {quickLink01.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className="text-[16px] leading-7 font-[400] text-textColor"
                >
                  {item.display}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor mt-10">
                want 
            </h2>
            <ul className="flex flex-col">
              {quickLink02.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className="text-[16px] leading-7 font-[400] text-textColor"
                >
                  {item.display}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor mt-10">
              Support
            </h2>
            <ul className="flex flex-col">
              {quickLink03.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  className="text-[16px] leading-7 font-[400] text-textColor"
                >
                  {item.display}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
