
import  { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import InnerImageZoom from 'react-inner-image-zoom';
//import React360Viewer from 'react-360-view';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { products } from '../data/Data';
import Container from '../common/Container';
import { IoIosArrowRoundDown, IoIosArrowRoundUp, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import ProductRotateModal from '../components/ProductRotateModal';
import {  IoEyeOutline, IoStar } from 'react-icons/io5';
import { PiMinus, PiPlus, PiShippingContainerLight } from 'react-icons/pi';
import { HiOutlineHeart } from 'react-icons/hi';
import { BsArrowRepeat } from 'react-icons/bs';
import { LuClock } from 'react-icons/lu';
import { RiFacebookLine, RiInstagramLine, RiTwitterXLine } from 'react-icons/ri';
import RelatedProducts from '../components/RelatedProducts';
import Accordion from '../components/Accordion';
import useQuantity from '../hooks/useQuantity';
//addedItemToCart, setAddedItemToCart 
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [is360View, setIs360View] = useState(false);
  const { qty, increaseQuantity, decreaseQuantity, addItemToCart} = useQuantity();
  useEffect(() => {
    const fetchedProduct = products.find(p => p?.id == id);
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setSelectedImage(fetchedProduct?.imgs[0] || fetchedProduct?.img);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const verticalSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    prevArrow: <IoIosArrowRoundDown />,
    nextArrow: <IoIosArrowRoundUp />,
    beforeChange: (current, next) => setSelectedImage(product?.imgs[next]),
  };

  const horizontalSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: false,
    prevArrow: <IoIosArrowBack />,
    nextArrow: <IoIosArrowForward />,
    beforeChange: (current, next) => setSelectedImage(product?.imgs[next]),
  };

  return (
    <>
      <Container>
        <div className="flex flex-col lg:flex-row gap-x-10 py-4">
          {/* Image Gallery */}
          <div className="  md:flex  items-start justify-center lg:max-w-[55%] ">
            {/* For Medium to Large Screens */}
            <div className="hidden md:block max-w-[20%] h-[600px]  productDet">
              <Slider {...verticalSettings} className="h-[480px]   ">
                {product?.imgs.map((img, index) => (
                  <div key={index} className="py-1 ">
                    <img
                      src={img}
                      alt={`Thumbnail ${index}`}
                      className={`cursor-pointer first:pt-5 w-[120px] h-[150px] object-cover ${selectedImage === img ? 'h-full' : ''}`}
                      onClick={() => setSelectedImage(img)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
           

            {/* Main Image Display */}
            <div className="relative w-full md:max-w-[80%] lg:-ml-4">
             
                <InnerImageZoom src={selectedImage} ZoomScale={0.9} zoomSrc={selectedImage} zoomType='hover' />
              
              <button
                className="mt-4 absolute top-0 left-5 bg-gray-200 text-black  px-4 rounded"
                onClick={() => setIs360View(!is360View)}
              >
                {is360View ? 'View Image' : 'View 360'}
              </button>

              {is360View && <ProductRotateModal selectedImage={selectedImage} onClose={() => setIs360View(false)} />}
            </div>

             {/* For Small Screens */}
             <div className="md:hidden block mt-5">
              <Slider {...horizontalSettings} className="h-full w-full  max-w-full">
                {product?.imgs.map((img, index) => (
                  <div key={index} className="py-1">
                    <img
                      src={img}
                      alt={`Thumbnail ${index}`}
                      className={`cursor-pointer w-[200px] h-[180px] object-cover ${selectedImage === img ? 'border-2 border-black' : ''}`}
                      onClick={() => setSelectedImage(img)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          

          {/* Product Details */}
          <div className="mt-4">
            <h1 className="text-3xl font-semibold">{product.title}</h1>
           <div className='flex flex-col gap-2 sm:flex-row items-center'>
           <span className='flex items-center py-2 text-orange-300 gap-x-0.5'><IoStar/><IoStar/><IoStar/><IoStar/><IoStar/></span>
           <p className='text-ash'>(2 customers review)</p>
           </div>
            <p className="text-2xl font-semibold mb-3">${product?.price}</p>
            <hr />
            <div className='flex items-center gap-x-2 py-3'>
                <span><IoEyeOutline/></span>
                <p>40 people are viewing this right now</p>
            </div>
            <p className="text-ash ">{product.description}</p>

            <div className='mt-5 space-y-3'>
                <p>Only <span>46 item(s)</span>left in stock!</p>
                <div className='w-full h-1 bg-ash/40 relative '>
                    <div className='absolute inset-0 h-full w-1/2 bg-green-600'></div>
                </div>

                {/** Buttons */}
                <div className="flex mt-5 items-center gap-x-3">
                  <div className="flex items-center justify-between gap-x-5 border py-3 rounded-2xl px-5">
                    <button
                      className=" "
                      onClick={() => decreaseQuantity(product.id, qty)}
                    >
                      <PiMinus />
                    </button>
                    <span className="  ">
                      {qty || 1}
                    </span>
                    <button
                      className=" "
                      onClick={() => increaseQuantity(product.id, qty)}
                    >
                      <PiPlus />
                    </button>
                  </div>
                  <button  onClick={() => addItemToCart(product)} className="w-[60%] bg-black text-white py-3 px-4 rounded-2xl">Add to Cart</button>
                  <div className='flex items-center gap-x-4'>
                  <button className='border border-black w-10 hover:bg-black hover:text-white h-10 rounded-full flex items-center justify-center text-xl'><HiOutlineHeart /></button>
                  <button className='border  border-black bg-black hover:bg-white hover:text-black text-white w-10 h-10 rounded-full flex items-center justify-center text-xl'><BsArrowRepeat /></button>
                  </div>
                  </div>
            </div>
          
            <button className="mt-4 border border-black text-black hover:bg-black hover:text-white w-full py-4 px-4 rounded-2xl">Buy Now</button>

             {/** Payment on Checkout card images */}

<div className='my-5 space-y-2'>
<span className='flex items-center gap-x-3 text-xl'><PiShippingContainerLight /> <p className='text-[1rem] text-ash'>Free worldwide shipping on all orders over $100</p> </span>
<span className='flex items-center gap-x-3 text-xl '><LuClock className='text-black/70' /> <p className='text-[1rem] text-ash'>Delivers in: 3-7 Working Days <Link to='/faq#shipment' className='text-black/80 border-b border-b-black pb-0.5'>Shipping & Return</Link> </p></span>

</div>
<hr />
          <div className='mt-5 space-y-1'>
            <p className='flex items-center gap-x-2 text-ash'>Cateory: <span className='flex text-black items-center gap-x-2 text-sm'>{product.category}</span></p>
            <p className='flex items-center gap-x-2 text-ash'>Share: <span className='flex text-black items-center gap-x-2'><RiFacebookLine /> <RiInstagramLine /> <RiTwitterXLine /></span></p>
          </div>
          </div> 
        </div>
    <Accordion />
        <RelatedProducts />
      </Container>
    </>
  );
};

export default ProductPage;
