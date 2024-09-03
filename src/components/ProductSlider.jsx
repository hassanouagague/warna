import React from "react";
import Slider from "react-slick";
import { products } from "../constants"; // Adjusted the path
import styles,{ layout }  from "../style";

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section id="product" className={layout.section}>
        <div className="w-full my-10">
            <h2 className={`${styles.heading2} text-center mb-8`}>Nos Produits</h2>
        <Slider {...settings}>
            {products.map((product) => (
            <div key={product.id} className="p-4">
                <div className="bg-gradient-to-r from-green-100 via-blue-200 to-blue-300 text-primary rounded-lg shadow-lg p-6 max-w-sm mx-auto transform transition duration-500 hover:scale-105">
                <img
                    src={product.imgSrc}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                    style={{ height: '200px' }} // Ensure image maintains height for consistency
                />
                <div className="p-4">
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-primary-200">{product.description}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
              <a
                href="#home" // ID of the section to scroll to
                className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300"
              >
                Contact
              </a>
              <span className="text-sm text-primary-300">Offre limitée</span>
            </div>
                </div>
            </div>
            ))}
        </Slider>
        </div>
    </section>
  );
};

export default ProductSlider;
