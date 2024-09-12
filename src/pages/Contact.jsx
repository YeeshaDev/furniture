//import React from "react";
import { useState } from "react";
import PageHeading from "../common/PageHeading";

const ContactUs = () => {
      
      const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic
  };

  return (
    <>
    <PageHeading home={"home"} pagename={"Contact Us"} />
    
    <div className="min-h-screen px-5 flex flex-col justify-center items-center pt-4">
      <div className=" max-w-4xl w-full border border-b-slate-50 bg-white text-black rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-3 text-center">Get in Touch</h1>
        <p className="text-sm text-center mb-8">Got questions? We’d love to hear from you!</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full mt-1 p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-bold hover:scale-[1.01] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg">Or reach us directly via:</p>
        <p className="text-2xl font-bold mt-2">contact@furnitureapp.com</p>
        <p className="text-xl mt-1">+123 456 7890</p>
      </div>
    </div>
    </>
  );
};
    

export default ContactUs;
