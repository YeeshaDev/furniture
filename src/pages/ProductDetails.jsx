// src/components/ProductPage.js
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import InnerImageZoom from 'react-inner-image-zoom';
import React360Viewer from 'react-360-view';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { products } from '../data/Data';
import Container from '../common/Container';
import { IoIosArrowRoundDown, IoIosArrowRoundUp, IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [is360View, setIs360View] = useState(false);

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
    prevArrow: <IoIosArrowRoundUp />,
    nextArrow: <IoIosArrowRoundDown />,
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
        <div className="flex flex-col md:flex-row py-4">
          {/* Image Gallery */}
          <div className="  md:flex  items-start justify-center">
            {/* For Medium to Large Screens */}
            <div className="hidden md:block max-w-[20%] h-[400px]  productDet">
              <Slider {...verticalSettings} className="h-[400px]  ">
                {product?.imgs.map((img, index) => (
                  <div key={index} className="py-1 ">
                    <img
                      src={img}
                      alt={`Thumbnail ${index}`}
                      className={`cursor-pointer w-[120px] h-[150px] object-cover ${selectedImage === img ? 'border-2 border-black h-full' : ''}`}
                      onClick={() => setSelectedImage(img)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
           

            {/* Main Image Display */}
            <div className="relative w-full md:max-w-[80%] lg:-ml-16">
              {is360View ? (
                <React360Viewer
                  amount={36}
                  imagePath={selectedImage}
                  fileName="{index}.jpg"
                />
              ) : (
                <InnerImageZoom src={selectedImage} zoomSrc={selectedImage} />
              )}
              <button
                className="mt-4 absolute top-0 left-5 bg-gray-200 text-black py-2 px-4 rounded"
                onClick={() => setIs360View(!is360View)}
              >
                {is360View ? 'View Image' : 'View 360'}
              </button>
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
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-lg">${product?.price}</p>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">Add to Cart</button>
            <button className="mt-4 bg-gray-200 text-black py-2 px-4 rounded">Buy Now</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductPage;
