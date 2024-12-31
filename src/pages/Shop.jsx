import { useState } from "react";
import PageHeading from "../common/PageHeading";
import { products } from "../data/Data";
import { BiCart, BiFilterAlt } from "react-icons/bi";
import Modal from "../common/Modal";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";

const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer visibility

  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };

  const handleClose = () => {
    setIsModalOpen(null);
  };

  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1500],
  });

  const categoryList = Array.from(
    new Set(products.map((product) => product.category))
  );

  const brandList = Array.from(
    new Set(products.map((product) => product.brand))
  );

  const filteredProducts = products.filter((product) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    )
      return false;
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand))
      return false;

    const price = parseFloat(product.price);

    if (price < filters.priceRange[0] || price > filters.priceRange[1])
      return false;

    return true;
  });

  const handlePriceChange = (value) => {
    setFilters({ ...filters, priceRange: value });
  };

  const handleCheckboxChange = (filterType, value) => {
    const updatedFilters = [...filters[filterType]];
    const index = updatedFilters.indexOf(value);
    if (index === -1) {
      updatedFilters.push(value);
    } else {
      updatedFilters.splice(index, 1);
    }
    setFilters({ ...filters, [filterType]: updatedFilters });
  };

  return (
    <div className="overflow-x-hidden">
      <PageHeading shopimg={'bg-[url("../images/miniture/shopbg.jpg")]'} home={"home"} pagename={"Shop"} />

      <div>
        <div className="w-11/12 m-auto flex gap-3 items-start mt-8">
          
          {/* Filter Drawer */}
          <div
            className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-lg z-[999] transform transition-transform duration-300 ${
              isDrawerOpen ? "translate-x-0" : "-translate-x-full"
            } lg:static lg:transform-none lg:w-1/4 lg:shadow-none`}
          >
            <div className="p-4">
              <div className="flex items-center justify-between">
              <h1 className="text-3xl font-semibold mb-4">Filter</h1>
              {/* Close Drawer Button (Visible on Mobile) */}
              <button
                className="lg:hidden mb-4 text-black font-bold"
                onClick={() => setIsDrawerOpen(false)}
              >
                Close
              </button>
              </div>
             

              <div className="mb-4">
                <h1 className="mb-3 text-xl font-medium">Category</h1>
                <div>
                  {categoryList.map((category, key) => (
                    <div className="flex items-center" key={key}>
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category)}
                        onChange={() =>
                          handleCheckboxChange("categories", category)
                        }
                        className="rounded-lg"
                      />
                      <div className="ml-1 capitalize">{category}</div>
                    </div>
                  ))}
                </div>
              </div>

              <hr />

              <div className="my-4">
                <h1 className="mb-3 text-xl font-medium">Price</h1>
                <Slider
                  min={0}
                  max={1500}
                  range
                  defaultValue={filters.priceRange}
                  trackStyle={""}
                  onChange={handlePriceChange}
                />
                <div className="flex justify-between">
                  <span>Min Price: ${filters.priceRange[0]}</span>
                  <span>Max Price: ${filters.priceRange[1]}</span>
                </div>
              </div>

              <hr />

              <div className="my-4">
                <h1 className="mb-3 text-xl font-medium">Brand</h1>
                <div>
                  {brandList.map((brand, key) => (
                    <div className="flex items-center" key={key}>
                      <input
                        type="checkbox"
                        checked={filters.brands.includes(brand)}
                        onChange={() =>
                          handleCheckboxChange("brands", brand)
                        }
                      />
                      <div className="ml-1">{brand}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="w-full lg:w-8/12">
            <div className="mt-5 flex items-center justify-between gap-x-5 mb-10 px-5">
              {/* Filter Drawer Button */}
          <button
            className="lg:hidden flex items-center gap-x-2 border border-black  rounded-2xl p-3  z-20"
            onClick={() => setIsDrawerOpen(true)}
          >
           Filter <BiFilterAlt size={24} />
          </button>
              <h3 className="border border-black rounded-2xl p-3 w-[100px] text-center">Sort By</h3>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredProducts.map((item, index) => (
                <div key={index}>
                  <div className="overflow-hidden relative ml-4">
                    <div className="image-container relative">
                      <div className="rounded-3xl">
                        <img src={item.img} alt="img" className="rounded-3xl" />
                      </div>
                      <div className="opacity-0 absolute top-0 right-0 m-4">
                        <div>
                          <div className="bg-white p-4 rounded-full mb-2">
                            <IoMdHeartEmpty />
                          </div>
                          <div className="bg-white p-4 rounded-full">
                            <IoMdSearch />
                          </div>
                        </div>
                      </div>
                      <div className="opacity-0 absolute -bottom-3 right-0 bg-white p-4 rounded-s-2xl">
                        <div className="bg-black text-white h-10 w-10 grid place-items-center rounded-3xl">
                          <button
                            className="text-2xl"
                            onClick={() => handleOpen(item.id)}
                          >
                            <BiCart />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="product-details mt-2">
                      <p className="mb-2">{item.title}</p>
                      <p>${item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Modal
          data={products.find((item) => item.id === isModalOpen)}
          isModalOpen={isModalOpen}
          handleClose={handleClose}
        />
      </div>
    </div>
  );
};

export default Shop;
