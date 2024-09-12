//import React from "react";
import Container from "../common/Container";
import PageHeading from "../common/PageHeading";
import Arrived from "../components/Arrived";

const AboutUs = () => {
  return (
    <div>
      <PageHeading home={"home"} pagename={"About Us"} />

      <Container>
      <article className="flex flex-col py-10 items-center lg:flex-row gap-x-20 gap-y-5 mt-5">
        <img src="../images/miniture/creation.jpg" alt="" className="lg:max-w-[40%] w-full h-full rounded-xl" />
       <div>
         <h2 className="text-4xl font-medium mb-5 lg:w-1/2">Comfort and Style:
        The Art of Interior Decor</h2>
        <p className="text-gray-400 lg:max-w-[60%]">Familiar furniture unexpectedly accumulates dust in the house.
Choosing and using suitable furniture is of great significance
in reducing the amount of dust accumulated…
Our Tea</p></div>
      </article>

      <article className="flex flex-col py-10 items-center lg:flex-row-reverse gap-x-20 gap-y-5 mt-5">
        <img src="../images/miniture/slider-7.jpg" alt="" className="lg:max-w-[40%] w-full h-full rounded-xl" />
       <div>
         <h2 className="text-4xl font-medium mb-5 lg:w-2/3">Elevate Your Interior Design
         with Exquisite Furniture</h2>
        <p className="text-gray-400 lg:max-w-[60%]">Familiar furniture unexpectedly accumulates dust in the house.
Choosing and using suitable furniture is of great significance
in reducing the amount of dust accumulated…
Our Tea</p></div>
      </article>
      <article className="mt-8">
        <Arrived />
      </article>
       
        </Container>
      </div>
     
  
  );
};

export default AboutUs;
