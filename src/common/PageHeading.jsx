//import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShopSubImg } from "../data/Data";
const PageHeading = ({ home, pagename,shopimg }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <IoIosArrowRoundBack />,
    nextArrow: <IoIosArrowRoundForward />,
  };
  return (
    <div >
      <div className={`${shopimg ? `${shopimg} rounded-lg bg-cover h-[60vh] bg-no-repeat bg-center` : 'bg-img '} relative`}>
        {shopimg ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  mx-auto flex flex-col items-center justify-center" >
          <div className="space-y-3 mb-3">
            <h1 className="text-3xl font-bold">{pagename}</h1>
            <p>
              <Link to={"/"} className=" text-gray-500 hover:text-gray-800 capitalize">
                {home}
              </Link>{" "}
              / {pagename}
            </p>
          </div>
          <Slider {...settings} className='shop  max-w-[680px] lg:max-w-[850px] pl-14 mx-auto'>
            {ShopSubImg.map((item) => {
              return (
                <div key={item.id} className="flex flex-col items-center justify-center mx-auto w-[130px]">
               <img src={item?.img} alt="categories" className="w-[130px] h-[130px] hover:border hover:border-black p-2 rounded-full" />
               <p className="capitalize text-center lg:mr-16 font-medium">{item.title}</p>
                </div>
              )
            })}
            </Slider>
          </div>
        ) : (
        <div className="absolute top-1/2  -translate-y-1/2 left-16">
          <h1 className="text-3xl font-bold">{pagename}</h1>
          <p>
            <Link to={"/"} className="hover:text-yellow-500 capitalize">
              {home}
            </Link>{" "}
            / {pagename}
          </p>
        </div>
        )}
      </div>
    </div>
  );
};

export default PageHeading;
