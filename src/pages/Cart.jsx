import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem, updateQuantity } from "../redux/cartSlice";
import PageHeading from "../common/PageHeading";
import { PiMinus, PiPlus } from "react-icons/pi";
import { Link } from "react-router-dom";
import { LuX } from "react-icons/lu";

const Cart = () => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector(
    (state) => state.cart
  );

  const removeFromCart = (itemId) => {
    dispatch(removeItem({ id: itemId }));
    dispatch(getCartTotal());
  };

  const increaseQuantity = (itemId, currentQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: currentQuantity + 1 }));
    dispatch(getCartTotal());
  };

  const decreaseQuantity = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: currentQuantity - 1 }));
      dispatch(getCartTotal());
    }
  };

  return (
    <div className="w-full px-4">
      <div>
        <PageHeading home="home" pagename="Cart" />
      </div>
      <div className="max-w-screen-lg mx-auto">
        <div className="mt-8">
          {cartProducts.length === 0 ? (
            <div className="text-lg font-medium uppercase text-center">
              Your Cart is empty
            </div>
          ) : (
            <div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-gray-200 font-semibold">
                    <tr>
                      <th className="px-2 py-2"></th>
                      <th className="px-2 py-2">Product</th>
                      <th className="px-2 py-2">Price</th>
                      <th className="px-2 py-2">Quantity</th>
                      <th className="px-2 py-2">SubTotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((item, key) => (
                      <tr
                        key={key}
                        className="border-b border-gray-100"
                      >
                        <td className="text-center px-2 py-2 cursor-pointer">
                          <span
                            className="text-black/90"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <LuX />
                          </span>
                        </td>
                        <td className="text-center px-2 py-2">
                          <div className="flex items-center space-x-2">
                            <img
                              src={item.img}
                              alt="img"
                              className="h-16 w-16 object-contain"
                            />
                            <p className="font-medium truncate">
                              {item.title}
                            </p>
                          </div>
                        </td>
                        <td className="text-center px-2 py-2">${item.price}</td>
                        <td className="text-center px-2 py-2">
                          <div className="flex items-center justify-center space-x-2">
                            <button
                              className="border px-3 py-1"
                              onClick={() =>
                                decreaseQuantity(item.id, item.quantity)
                              }
                            >
                              <PiMinus />
                            </button>
                            <span className="border px-3 py-1">
                              {item.quantity || 1}
                            </span>
                            <button
                              className="border px-3 py-1"
                              onClick={() =>
                                increaseQuantity(item.id, item.quantity)
                              }
                            >
                              <PiPlus />
                            </button>
                          </div>
                        </td>
                        <td className="text-center px-2 py-2">
                          ${item.price * item.quantity}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 mt-6 bg-white font-bold">
                <h1 className="mb-4 text-lg text-center">Cart Total</h1>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Sub Total:</span>
                  <span>${totalAmount}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Shipping Charge:</span>
                  <span>$10</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <span>Grand Total:</span>
                  <span>${totalAmount + 10}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                  <Link
                    to="/checkout"
                    className="w-full sm:w-auto px-4 py-2.5 border border-black/70 rounded-md text-black/70 text-center"
                  >
                    Proceed To Checkout
                  </Link>
                  <Link
                    to="/shop"
                    className="w-full sm:w-auto px-4 py-2 bg-black/90 rounded-lg text-white text-center"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
