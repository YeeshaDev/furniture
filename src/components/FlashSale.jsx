import { useState } from "react";
import { products } from "../data/Data";
import { BiCart } from "react-icons/bi";
import Modal from "../common/Modal";
import Heading from "../common/Heading";
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const FlashSale = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };

  return (
    <div>
      <div className="w-11/12 m-auto">
        <Heading heading={"Most Popular"} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {products.map((item, index) => (
            <div key={index} className="mt-8">
              <div className="overflow-hidden relative group">
                {/* Image container with tilt effect on hover */}
                <Link to={`/product/${item?.id}`}>
                <div className="relative max-h-[300px] rounded-3xl">
                  <img
                    src={item.img || item?.imgs[0]}
                    alt="img"
                    className="rounded-3xl object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-105 group-hover:rotate-y-180"
                  />
                </div>
                </Link>
                <div className="opacity-0 absolute top-0 right-0 m-4 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <div className="bg-white p-4 rounded-full mb-2">
                      <IoMdHeartEmpty />
                    </div>
                    <div className="bg-white p-4 rounded-full">
                      <IoMdSearch />
                    </div>
                  </div>
                </div>

                <div className="opacity-0 absolute -bottom-3 right-0 bg-white p-4 rounded-s-2xl group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black text-white h-10 w-10 grid place-items-center rounded-3xl">
                    <button
                      className="text-2xl"
                      onClick={() => handleOpen(item.id)}
                    >
                      <BiCart />
                    </button>
                  </div>
                </div>

                <div className="product-details mt-2">
                  <p className="mb-2">{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        data={products.find((item) => item.id === isModalOpen)}
        isModalOpen={isModalOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default FlashSale;
