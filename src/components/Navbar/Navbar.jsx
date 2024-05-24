import React from "react";
import logo from "../../assets/jdfood.jpeg";
import { FaCartShopping } from "react-icons/fa6";
import ThemeBtn from "./ThemeBtn";
const Navbar = () => {
  const Nav_Link = [
    { href: "/", Key: "home", label: "Home" },
    { href: "/about", Key: "about", label: "About" },
    { href: "/contact", Key: "contact", label: "contact" },
  ];
  return (
    <>
      <div
        className="shadow-2xl dark:shadow-white
      bg-white
      dark:bg-gray-900 dark:text-white duration-500 "
      >
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center ">
            <div>
              <a
                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
                href="#"
              >
                <img src={logo} alt="JD handi" className="w-23 h-20 p-1" />
              </a>
            </div>
            <div className="flex items-center gap-4">

            <div className="flex items-center">
              <ThemeBtn />
            </div>

            <div className="hidden sm:flex gap-4  flex-wrap">
              {Nav_Link.map((link) => (
                  <a className="text-lg relative group" href={link.href} key={link.Key}>
                  {link.label}
                  <span className="inline-block absolute w-0 h-[2px] bg-gradient-to-r from-orange-700 to-yellow-400 transition-all group-hover:w-full -bottom-1 left-0  duration-300"></span>
                </a>
              ))}
            </div>

            <div className="sm:hidden">
              <button className=" bg-gray-900 text-orange-400 px-4 py-2 rounded-full hover:scale-105  duration-300  flex items-center gap-2 font-medium ">
                Order
                <FaCartShopping className="text-xl text-orange-400 drop-shadow-sm duration-300" />
              </button>
            </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
