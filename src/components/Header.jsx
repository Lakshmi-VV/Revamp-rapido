import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png";
import menu from "../assets/images/menu_icon.png";
import { Icons } from "./Icons";

function Header() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    "Home",
    "About us",
    "Safety",
    "Careers",
    "Blog",
    "Press",
    "Contact us",
  ];

  return (
    <div className="2xl:container mx-auto w-full bg-white">
      <div className="w-[100%] mx-auto px-[20px] md:px-[50px] lg:px-[150px] flex justify-between items-center fixed  bg-white z-30">
        <img src={Logo} alt="logo-img" className="h-fit w-16 md:w-24" />

        <div className="flex flex-row-reverse lg:flex-row items-center gap-5 lg:gap-10 py-5">
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`relative cursor-pointer ${
                  active === item ? "text-black font-bold" : "text-gray-600"
                } hover:text-black group`}
                onClick={() => setActive(item)}
              >
                {item}
                <span
                  className={`absolute left-0 bottom-[-8px] h-[3px] bg-black transition-all duration-300 ease-in-out ${
                    active === item ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            ))}
          </ul>

          <img
            src={menu}
            width={24}
            className="lg:hidden cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />

          <button className="h-fit text-sm font-semibold lg:bg-black lg:text-white lg:font-semibold lg:p-2 lg:rounded-full lg:rounded-br-sm lg:px-5">
            Download App
          </button>
        </div>

        {menuOpen && (
          <div className="fixed inset-0 z-999 bg-[#f9c935] h-screen w-screen top-0 flex flex-col gap-10 items-center p-5">
            <div className="w-full flex justify-end">
              <Icons icon="close_icon" onClick={() => setMenuOpen(!menuOpen)} />
            </div>
            <ul className="flex flex-col items-center gap-8 text-sm font-medium ">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className={`relative cursor-pointer ${
                    active === item ? "text-black font-bold" : "text-gray-600"
                  } hover:text-black group`}
                  onClick={() => setActive(item)}
                >
                  {item}
                  <span
                    className={`absolute left-0 bottom-[-8px] h-[3px] bg-black transition-all duration-300 ease-in-out ${
                      active === item ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
