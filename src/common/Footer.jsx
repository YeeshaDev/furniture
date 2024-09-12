//import React from "react";
import { footer } from "../data/Data";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#f4f2f2]">
        
        <div className="w-10/12 m-auto">
        <div className="text-center flex flex-col gap-y-3 px-3 py-12">
          <h3 className="text-2xl mb-5 font-medium">Sign Up For Our Newsletter To Receive Notifications <br className="hidden sm:block" />
          And Other Promotions</h3>
          <form action="" className="border border-black py-2 rounded-2xl pl-5 pr-3 flex items-center gap-x-5 justify-between w-full max-w-xl mx-auto">
            <input type="text" placeholder="Enter your email..." className="w-3/4 border-0 outline-0 focus:border-0 bg-inherit" />
            <button className="w-[150px] common-hover h-10 !rounded-2xl">Subscribe</button>
          </form>
        </div>
        <hr />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-between py-12 gap-8 lg:gap-10 ">
            {footer.map((item, key) => (
              <div className="text-gray-500 " key={key}>
                <h3 className="text-2xl mb-5 text-black whitespace-nowrap">{item.header}</h3>
                <div className="flex flex-col gap-y-3">
                <p>{item.content1}</p>
                <p className=" whitespace-nowrap">{item.content2}</p>
                <p className=" whitespace-nowrap">{item.content3}</p>
                <p className=" whitespace-nowrap">{item.content4}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white w-full text-center py-1.5">
        <p>© 2020 yeeshadev, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
