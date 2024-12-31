import { banners } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import { MdOutlineChair } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Container from "../common/Container";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowRoundBack />,
    nextArrow: <IoIosArrowRoundForward />,
  };
  return (
    <div className="banner mt-3">
      <Container>
       
        <div className="w-full relative">
        <div className=" text-lg text-[#fff8f8] absolute top-[42%] sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  z-10 flex flex-col items-center justify-center gap-y-5 px-10">
           <span className="uppercase tracking-wider font-[var(--playwrite)]">Elevate your home</span>
           <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold whitespace-nowrap">  Transforming Your Lifestyle <br /> with Our Furniture  Creations</h1> 
           
            <Link
              to="/shop"
             
            >
            <button  className="text-white !rounded-xl  border border-white shadow-lg whitespace-nowrap text-xl w-[140px]  ml-4  px-7 py-2  mx-auto">
            Shop Now
            </button>
            </Link>
          </div>
          <Slider {...settings}>
            {banners.map((data, key) => (
              <div className="banner-slider relative overflow-hidden rounded-2xl" key={key}>
                <img
                  src={data.banner}
                  alt="databannerinmg"
                  className="rounded-2xl h-[450px] sm:h-[600px] lg:h-[85vh] object-cover"
                  width={"100%"}
                />
                <div className="absolute w-full h-full inset-y-0 inset-x-0 bg-[rgba(0,0,0,0.07)] z-[1] rounded-2xl"></div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
/** <div className="text-white mr-4 common-hover text-4xl rounded-3xl h-12 w-20 grid place-items-center">
                <MdOutlineChair />
              </div> */