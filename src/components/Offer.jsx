///import React from "react";
import Container from "../common/Container";
import { offer } from "../data/Data";

const Offer = () => {
  return (
    <div className="mt-8">
      <Container>
        <div>
          {offer.map((data, key) => (
            <div key={key}>
              <div className="relative">
                <div className=" craft-img h-[300px] sm:h-full rounded-3xl">
                  <img
                    src={data.customer_img}
                    alt="img"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <div >
                  <p className="bg-white mx-2 sm:mx-0 p-4 text-xl rounded-full absolute top-3 sm:top-0 -right-6">
                    {data.title}
                  </p>
                  <h1 className="bg-white ml-3 text-center sm:mx-0 px-6 py-6 text-3xl absolute top-[4.7rem] sm:top-14 -right-6 rounded-full">
                    {data.subtitle}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Offer;
