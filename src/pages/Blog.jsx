//import React from "react";
import PageHeading from "../common/PageHeading";
import {IoArrowForwardCircleOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { blogData } from "../data/Data";
const Blog = () => {
  return (
   
      
      <motion.div
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{duration:1.7}}
        exit={{
           
            opacity:0,
        }}
        className="w-full pb-5  px-6 lg:px-10"
         >
           <PageHeading  home={"home"} pagename={"Blog"} /> 
           <h2 className="mt-5 text-xl sm:text-2xl font-semibold text-center"> Discover the Latest Stories in Modern Furniture</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-center  gap-4  mt-5 w-full'>
           {blogData.map((item) => (
            <div key={item.id} className='w-full'>
                <Link to={`/blog/${item.title}`}>
             <figure className='w-full relative overflow-hidden rounded-lg h-[250px] last:h-[100px]'>
                    <img src={item.image} alt='blog' className='hover:scale-110 transition-all duration-500 w-full object-cover h-full' />  
                    </figure>
                  
                  <div>
                    <p className='text-[var(--primary)] font-bold uppercase mt-2 text-left ml-2'>20 may, 2020</p>   
                    <h3 className=' capitalize font-semibold lg:text-[1.5rem]  text-left  ml-2  mt-3'>{item.title}</h3>
                    <p className='mt-2 text-[1rem] text-left ml-[0.5rem] w-full '>{item.text}</p>
                    <button className='flex items-center gap-1 ml-2 mt-2 text-[var(--primary)] font-[600] cursor-pointer hover:scale-[1.02] hover:transition-all hover:duration-200'>Read more <IoArrowForwardCircleOutline/></button>
                    
                  </div>
                  </Link>
            </div>
           ))} 
        </div>
        </motion.div>
    
  );
};

export default Blog;
