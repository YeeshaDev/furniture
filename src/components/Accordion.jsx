// src/components/Accordion.js
import { useState } from 'react';

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b w-full border-gray-200">
            <button
                className="w-full text-left px-4 py-5   focus:outline-none "
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex justify-between items-center">
                    <span className='text-xl sm:text-3xl font-medium'>{title}</span>
                    <span className='text-2xl'>{isOpen ? '-' : '+'}</span>
                </div>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

const Accordion = () => {
    return (
        <div className="w-full  mx-auto mt-8 mb-5  border-t">
            <AccordionItem title="Description">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
               <div className=' my-5 md:flex flex-row justify-between'> 
                <ul>
                    <li>Variant: Refined Polished Leather/Oak</li>
                    <li>Base color: Oak</li>
                    <li>Base material: Lacquered Oak</li>
                    <li>Base type: Wood Base</li>
                    <li>Seat finish: Full Upholstery</li>
                    <li>Seat material: Leather</li>
                    <li>Height: 74.4cm</li>
                    <li>Width: 60cm</li>
                    <li>Depth: 69cm</li>
                    <li>Seat height: 38cm</li>
                </ul>
                <div>
                    <img src="https://eskil.qodeinteractive.com/wp-content/uploads/2022/03/prikaz.png" alt="" />
                </div></div>
            </AccordionItem>
            <AccordionItem title="Additional Information">
            <ul className='font-medium space-y-2'>
                    <li>SET: 2 chairs</li>
                    <li>WARRANTY: 3 years</li>
                    <li>WEIGHT:	25kg</li>
                    <li>VARIANT: Lacquer Wood</li>
                    <li>DELIVERY: Yes</li>
                    <li> MATERIAL: Leather</li>
                   
                </ul>
            </AccordionItem>
            <AccordionItem title="Reviews">
                <Reviews />
            </AccordionItem>
        </div>
    );
};

const Reviews = () => {
    const [reviews, setReviews] = useState([
        "Great chair, very comfortable!",
        "Good value for money.",
        "Stylish and sturdy."
    ]);
    const [newReview, setNewReview] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, newReview]);
        setNewReview("");
    };

    return (
        <div>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index} className="mb-2">{review}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit} className="mt-4">
                <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Write a review"
                    required
                />
                <button type="submit" className="mt-2 border px-4 py-2 bg-black text-white hover:text-black rounded-2xl hover:border-black hover:bg-white">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Accordion;
