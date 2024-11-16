import React from "react";
import Google from "../assets/images/googleplaystore.png";
import Apple from "../assets/images/applestore.png";
import App from "../App";
import { Icons } from "./Icons";

function Footer() {
  return (
    <div className="2xl:container mx-auto w-full bg-black">
      <div className="w-[100%] mx-auto pt-[50px] px-[20px] md:px-[50px] lg:px-[150px] flex flex-col  justify-between items-center ">
        <div className="p-6 w-full flex flex-col md:flex-row gap-10 justify-between">
          <div className=" flex gap-10">
            <div className="flex flex-col gap-5">
              <p className="text-white text-base font-semibold">Customer app</p>
              <img src={Google} className="h-[50px] border rounded-md" />
              <img src={Apple} className="h-[50px]  border rounded-md" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-white text-base font-semibold">Captain app</p>
              <img src={Google} className="h-[50px]  border rounded-md" />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="text-white text-base font-semibold">Follow us</p>

            <div className="flex gap-8">
              <a href="#">
                <Icons icon="facebook" />
              </a>
              <a href="#">
                <Icons icon="twitter" />
              </a>
              <a href="#">
                <Icons icon="insta" />
              </a>
            </div>
          </div>
        </div>
        <hr className="w-full border-gray-800" />
        <div className="p-6">
          <p className="text-gray-500 text-sm">
            © 2024 Roppen Transportation. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
