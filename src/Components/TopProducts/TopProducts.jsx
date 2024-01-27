import React from "react";
import Img1 from "../../assets/shirt/Hoodie.jpg";
import Img2 from "../../assets/shirt/PrintedShirt.jpg";
import Img3 from "../../assets/shirt/Unisexshirts.jpg";

import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Hoodie",
    description:
      "Each piece tells a unique story through expressive designs",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "Make a statement with our vibrant printed shirts. ",
  },
  {
    id: 3,
    img: Img3,
    title: "UnisexShirts",
    description:
      "Discover the epitome of casual chic with our unisex t-shirts.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24" style={{ textAlign: 'center' }}>
          <p data-aos="fade-up" className="text-sm text-#118ab2">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Discover the epitome of style with ChicHaven's curated selection of the best products
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-blue hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-black hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-black"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;