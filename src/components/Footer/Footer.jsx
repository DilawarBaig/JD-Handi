import React from "react";
import logo from "../../assets/jdfood.jpeg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const Nav_Link = [
    { href: "/", Key: "home", label: "Home" },
    { href: "/about", Key: "about", label: "About" },
    { href: "/contact", Key: "contact", label: "contact" },
  ];
  const contact_us = [
    { href: "/suggestion", Key: "suggestion", label: "Suggestion" },
    { href: "/complaint", Key: "complaint", label: "complaint" },
  ];
  const info = [
    { href: "/privacy-policy", Key: "Privacy Policy", label: "Privacy Policy" },
    { href: "/terms-and-condition", Key: "Terms & Conditions", label: "Terms & Conditions" },
  ];
  return (
    <div className="bg-[#f7f8f3] dark:bg-gray-900 dark:text-gray-300">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 py-5">
          <div className="py-8 px-4 col-span-1">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
              <img src={logo} className="max-w-[50px]" alt="Jd Handi" />
              JD Handi
            </h1>
            <p>
            At JD Handi, we believe true quality is reflected in the absolute satisfaction of our customers. Our flavors are inspired by the rich diversity of South Asian cuisine. We aim to remind everyone of its greatness by using the finest ingredients in our recipes, ensuring delightful results every time. At JD Handi, we keep our traditions alive by serving exceptional food made with passion, honesty, and pride.
            </p>
            <br />

            <div>
              <FaLocationArrow />
              <p>Karahi, Pakistan</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+92 312-2205748</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3  md:pl-10 ">
            <div>
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Quick Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {Nav_Link.map((link) => (
                    <a href={link.href}>
                      {" "}
                      <li key={link.Key}>{link.label}</li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                  Contact Us
                </h1>
                <ul className="flex flex-col gap-3">
                  {contact_us.map((link) => (
                    <a href={link.href}>
                      {" "}
                      <li key={link.Key}>{link.label}</li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4 ">
               
                <ul className="flex flex-col gap-3">
                  {info.map((link) => (
                    <a href={link.href}>
                      {" "}
                      <li key={link.Key}>{link.label}</li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-5 border-t-2 border-gray-300/50">
            @copyright 2024. JD Handi by Dilawar Ali Baig 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
