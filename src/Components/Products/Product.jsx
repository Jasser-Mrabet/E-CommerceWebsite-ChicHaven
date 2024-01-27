import React, { useState } from "react";
import ProductImage1 from "../../assets/Model/man11.jpg";
import ProductImage2 from "../../assets/Model/women10.jpg";
import ProductImage3 from "../../assets/Model/women9.jpg";
import ProductImage4 from "../../assets/Model/women7.jpg";

import { FaStar } from "react-icons/fa6";

const Products = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (productId) => {
    if (!favorites.includes(productId)) {
      setFavorites([...favorites, productId]);
    } else {
      setFavorites(favorites.filter((id) => id !== productId));
    }
  };

  const handleQuickView = (productId) => {
    console.log(`Quick View for Product ID: ${productId}`);
  };

  const productData = [
    {
      id: 1,
      image: ProductImage1,
      title: "New",
      rating: 5.0,
      color: "Ivory White",
      aosDelay: "0",
    },
    {
      id: 2,
      image: ProductImage2,
      title: "New",
      rating: 4.5,
      color: "White",
      aosDelay: "200",
    },
    {
      id: 3,
      image: ProductImage3,
      title: "New",
      rating: 4.7,
      color: "Purple",
      aosDelay: "400",
    },
    {
      id: 4,
      image: ProductImage4,
      title: "New",
      rating: 4.4,
      color: "Pink",
      aosDelay: "600",
    },
    {
      id: 5,
      image: ProductImage2,
      title: "New",
      rating: 4.5,
      color: "Black",
      aosDelay: "800",
    },
  ];

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-blue-500">
            Exclusive Picks Just for You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-blue-800">
            Fashion Collection
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-500">
            Discover the latest trends in fashion and style.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {productData.map((product) => (
              <div
                data-aos="fade-up"
                data-aos-delay={product.aosDelay}
                key={product.id}
                className="space-y-3 transition-transform transform duration-300 hover:scale-105"
              >
                <img
                  src={product.image}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md filter brightness-90 dark:brightness-100 transition-transform duration-300 transform hover:scale-105"
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-blue-600">{product.title}</h3>
                    <p className="text-sm text-gray-600">{product.color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className={`text-blue-600 hover:text-blue-800 transition-colors`}
                      onClick={() => addToFavorites(product.id)}
                    >
                      ❤️
                    </button>
                    <button
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                      onClick={() => handleQuickView(product.id)}
                    >
                      🔍
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-blue-600 text-white py-1 px-5 rounded-md hover:bg-blue-800">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
