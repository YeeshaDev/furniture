//import React from "react";
import { footer } from "../data/Data";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#f4f2f2]">
        <div className="w-10/12 m-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-between py-10 gap-8 lg:gap-10">
            {footer.map((item, key) => (
              <div className="text-gray-500 " key={key}>
                <h1 className="text-2xl mb-5 text-black whitespace-nowrap">{item.header}</h1>
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
