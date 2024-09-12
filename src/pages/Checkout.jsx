import { useState } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import Container from "../common/Container";
function Checkout() {
  const {totalAmount} = useSelector(
    (state) => state.cart)
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });

  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    phone: "",
    email: "",
  });

  const [cardDetails, setCardDetails] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });


  const handleInputChange = (e, setDetails) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const validateForm = () => {
    for (let key in billingDetails) {
      if (!billingDetails[key]) return false;
    }
    for (let key in shippingDetails) {
      if (!shippingDetails[key]) return false;
    }
    for (let key in cardDetails) {
      if (!cardDetails[key]) return false;
    }
    return true;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all the required fields.",
        icon: "error",
        confirmButtonColor: "#000000",
        confirmButtonText: "Okay",
      });
      return;
    }

    localStorage.setItem("userName", billingDetails.firstName);
   const name = localStorage.getItem("userName");
    Swal.fire({
      title: `${name} your Order has been Placed Successfully!`,
      text: "Items purchased will be delivered to you in the next 3-4 days. In case of any queries please reach out to us on 91xxxxxxxx ",
      icon: "success",
      confirmButtonColor: "#000000",
      confirmButtonText: "Continue Shopping",
    });
  };

  return (
    <Container>
    <div className="px-5 pb-10">
      <h2 className="text-3xl text-center my-7 font-semibold">Checkout</h2>
      <section className="md:flex md:gap-x-20 justify-between">
        <article className="w-full md:w-1/2">
          <div>
            <h3 className="text-2xl font-medium my-7">Billing Details</h3>
            <form className="grid grid-cols-2 gap-5">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                className="input"
                value={billingDetails.firstName}
                onChange={(e) => handleInputChange(e, setBillingDetails)}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                className="input"
                value={billingDetails.lastName}
                onChange={(e) => handleInputChange(e, setBillingDetails)}
              />
              <input
                type="text"
                name="address"
                placeholder="Street Address*"
                className="input col-span-2"
                value={billingDetails.address}
                onChange={(e) => handleInputChange(e, setBillingDetails)}
              />
              <input
                type="text"
                name="country"
                placeholder="Country*"
                className="input"
                value={billingDetails.country}
                onChange={(e) => handleInputChange(e, setBillingDetails)}
              />
              <input
                type="text"
                name="state"
                placeholder="State*"
                className="input"
                value={billingDetails.state}
                onChange={(e) => handleInputChange(e, setBillingDetails)}
              />
              <input
                type="text"
                name="city"
                placeholder="City*"
                className="input"
                value={billingDetails.city}
                onChange={(e) => handleInputChange(e, setBillingDetails)}
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip*"
                className="input"
                value={billingDetails.zip}
                onChange={(e) => handleInputChange(e, setBillingDetails)}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone number*"
                className="input"
                value={billingDetails.phone}
                onChange={(e) => handleInputChange(e, setBillingDetails)}
              />
              <input
                type="text"
                name="email"
                placeholder="Email*"
                className="input"
                value={billingDetails.email}
                onChange={(e) => handleInputChange(e, setBillingDetails)}
              />
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-medium my-7">Shipping Address</h3>
            <div className="flex gap-2 mb-3 text-sm">
              <input type="checkbox" className="outline-0" />
              <p>Same as billing</p>
            </div>
            <form className="grid grid-cols-2 gap-5">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                className="input"
                value={shippingDetails.firstName}
                onChange={(e) => handleInputChange(e, setShippingDetails)}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                className="input"
                value={shippingDetails.lastName}
                onChange={(e) => handleInputChange(e, setShippingDetails)}
              />
              <input
                type="text"
                name="address"
                placeholder="Street Address*"
                className="input col-span-2"
                value={shippingDetails.address}
                onChange={(e) => handleInputChange(e, setShippingDetails)}
              />
              <input
                type="text"
                name="country"
                placeholder="Country*"
                className="input"
                value={shippingDetails.country}
                onChange={(e) => handleInputChange(e, setShippingDetails)}
              />
              <input
                type="text"
                name="state"
                placeholder="State*"
                className="input"
                value={shippingDetails.state}
                onChange={(e) => handleInputChange(e, setShippingDetails)}
              />
              <input
                type="text"
                name="city"
                placeholder="City*"
                className="input"
                value={shippingDetails.city}
                onChange={(e) => handleInputChange(e, setShippingDetails)}
              />
              <input
                type="text"
                name="zip"
                placeholder="Zip*"
                className="input"
                value={shippingDetails.zip}
                onChange={(e) => handleInputChange(e, setShippingDetails)}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone number*"
                className="input"
                value={shippingDetails.phone}
                onChange={(e) => handleInputChange(e, setShippingDetails)}
              />
              <input
                type="text"
                name="email"
                placeholder="Email*"
                className="input"
                value={shippingDetails.email}
                onChange={(e) => handleInputChange(e, setShippingDetails)}
              />
            </form>
          </div>
          <div className="mt-7 flex-center gap-x-3">
            <div className="mt-5 w-full leading-tight shadow-md py-6 px-2 sm:px-5 border border-textClr rounded-lg">
              <p className="flex justify-between">
                Home
                <img
                  alt="check icon"
                  src="https://res.cloudinary.com/debgkcg8v/image/upload/v1720456942/check-circle_qq0f0z.png"
                  className="object-contain w-5 h-5"
                />
              </p>
              <p className="text-[13px] sm:text-sm mt-1">
                Takes 3-5 business days
              </p>
            </div>
            <div className="mt-5 max-h-[100px] w-full bg-[#BDBDBD]/30 leading-tight shadow-md py-6 px-2 sm:px-5 border rounded-lg">
              <p>Store pickup</p>
              <p className="text-[12px] sm:text-sm mt-1">
                Pickup from store location
              </p>
            </div>
          </div>
        </article>

        <article className="w-full md:w-1/2 mt-3 border border-lightGray/20 mx-auto pt-5 pb-10 px-5 sm:px-10 shadow-md rounded-md">
          <div className="text-Clr">
            <h2 className="text-xl text-center font-bold">Order Details</h2>
            <div className="flex flex-col gap-6 mt-5">
              <p className="flex justify-between gap-x-10">
                SUBTOTAL <span>${totalAmount}.00</span>
              </p>
              <hr />
              <p className="flex justify-between gap-x-10">
                TOTAL <span className="text-textClr text-lg font-bold">${totalAmount}</span>
              </p>
              <hr />
              <div className="flex justify-between">
                <div>
                  <p className="flex items-center gap-x-2 text-sm">
                    <IoMdRadioButtonOn /> <span>Credit card</span>
                  </p>
                  <p className="text-lightGray text-[12px]">
                    Pay with your Visa or Master card
                  </p>
                </div>
                <img
                  width={100}
                  height={100}
                  alt="visa"
                  src="https://res.cloudinary.com/debgkcg8v/image/upload/v1720455143/Group_1321314334_x38eix.png"
                  className="object-contain"
                />
              </div>
              <p className="flex items-center gap-x-2 text-sm">
                <IoMdRadioButtonOff /> <span>Direct Bank transfer</span>
              </p>
              <p className="flex items-center gap-x-2 text-sm">
                <IoMdRadioButtonOff /> <span>Cash on Delivery</span>
              </p>

              {/* CARD DETAILS FORM */}
              <div className="text-text-clr font-light">
                <h4>Fill in your details</h4>
                <form className="flex flex-col gap-y-5 mt-5">
                  <input
                    type="text"
                    name="cardHolder"
                    placeholder="Card holder*"
                    className="input"
                    value={cardDetails.cardHolder}
                    onChange={(e) => handleInputChange(e, setCardDetails)}
                  />
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card number*"
                    className="input"
                    value={cardDetails.cardNumber}
                    onChange={(e) => handleInputChange(e, setCardDetails)}
                  />
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="Expiry date*"
                    className="input"
                    value={cardDetails.expiryDate}
                    onChange={(e) => handleInputChange(e, setCardDetails)}
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="Security (CVV)*"
                    className="input"
                    value={cardDetails.cvv}
                    onChange={(e) => handleInputChange(e, setCardDetails)}
                  />
                </form>
                <div className="text-[13px] space-y-2 mt-5">
                  <h4 className="text-[17px] font-medium">
                    Review and place order
                  </h4>
                  <p>
                    Please review the order details and payment details before
                    proceeding to confirm your order
                  </p>
                  <p className="flex items-start gap-x-2">
                    <IoMdRadioButtonOff />{" "}
                    <span>
                      I agree to the{" "}
                      <span className="font-semibold">
                        Terms & conditions, Privacy policy & Return policy
                      </span>
                    </span>
                  </p>
                  <p className="flex items-center gap-x-2">
                    <IoMdRadioButtonOff /> <span>Sign me up to the email list</span>
                  </p>
                </div>
              </div>

              <button
                className="bg-black text-white flex-center uppercase h-14 w-full mt-7"
                onClick={handlePlaceOrder}
              >
                place order
              </button>
            </div>
          </div>
        </article>
      </section>
    </div>
    </Container>
  );
}

export default Checkout;