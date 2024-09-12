import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";
import useQuantity from "../hooks/useQuantity";

const Modal = ({ isModalOpen, handleClose, data }) => {
  const { qty, increaseQuantity, decreaseQuantity, addItemToCart, addedItemToCart, setAddedItemToCart } = useQuantity();

  useEffect(() => {
    if (isModalOpen) {
      // Reset addedItemToCart state when the modal is opened
      setAddedItemToCart(false);
    }
  }, [isModalOpen, setAddedItemToCart]);

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content w-[90%] md:w-2/3 relative bg-white overflow-hidden">
            <span
              className="absolute top-0 right-0 p-4"
              onClick={() => handleClose()}
            >
              <FaTimes />
            </span>
            <div className="flex">
              <div className="relative">
                <div className="flash_sale_img">
                  <img src={data.img} alt="img" />
                </div>
              </div>

              <div className="modal-info ml-6">
                <p className="mb-2 font-bold">{data.short_description}</p>
                <p className="text-red-600 text-xl">${data.price}</p>
                <p className="my-2">${data.description}</p>

                <div className="flex items-center mb-2">
                  <p className="font-semibold mr-2">  Preference: </p>
                  <select
                    name="shades"
                    id="shades"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none"
                  >
                    <option value="options">Choose an Options</option>
                    <option value="options">1 Choose an Options</option>
                    <option value="options">2 Choose an Options</option>
                    <option value="options">3 Choose an Options</option>
                    <option value="options">4 Choose an Options</option>
                  </select>
                </div>
                <p className="text-green-700 m-0">In Stock 400 Items</p>
                <div className="flex items-center">
                  <div className="flex mr-3">
                    <button
                      className="border mt-4 py-3 px-6"
                      onClick={() => decreaseQuantity(data.id, qty)}
                    >
                      <PiMinus />
                    </button>
                    <span className="border mt-4 py-3 px-6 count">
                      {qty || 1}
                    </span>
                    <button
                      className="border mt-4 py-3 px-6"
                      onClick={() => increaseQuantity(data.id, qty)}
                    >
                      <PiPlus />
                    </button>
                  </div>

                  <div className="addtocart mr-3">
                    {addedItemToCart ? (
                      <button className="mt-4 px-6 py-3 text-white">
                        <Link to="/cart">View Cart</Link>
                      </button>
                    ) : (
                      <button
                        onClick={() => addItemToCart(data)}
                        className="mt-4 px-6 py-3 text-white rounded-md"
                      >
                        Add To Cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
