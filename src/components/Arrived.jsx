import { arriveItems } from "../data/Data";
//import Heading from "../common/Heading";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import Container from "../common/Container";

const Arrived = () => {
  return (
    <div>
      <Container>
       
        <div className="flex flex-col md:flex-row items-center gap-x-10 mt-10">
          <div className="md:w-2/3 mb-5">
            <h1 className="font-semibold text-3xl text-center lg:text-start">Instagram Shop</h1>
            <p className="my-4">
              Tag @ furniture in your Instagram photos for a chance to be
              featured here.
            </p>
            <Link
              className="border rounded-full px-4 py-2 "
              to={"instagram.com"}
            >
              Visit Our Instagram
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {arriveItems.map((item, index) => (
              <div key={index}>
                <div className="">
                  <div
                    className={`relative rounded-3xl overflow-hidden ${
                      index === 4 ? "fifth-image !mt-[-5rem] lg:!mt-[-12rem]" : ""
                    }`}
                  >
                    <img
                      src={item.img}
                      alt="img"
                      className="rounded-3xl hover:scale-110 transition-all duration-500"
                    />

                    <div className="absolute bottom-0 right-0 p-3 bg-white  rounded-xl">
                      <div className=" p-1 bg-yellow rounded-full text-white">
                        <FaInstagram />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Arrived;
