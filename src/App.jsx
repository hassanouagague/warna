import React, { useState } from "react";
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import ProductSlider from "./components/ProductSlider"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? "bg-primary text-white" : "bg-white text-black"} w-full overflow-hidden`}>
      <div className="flex justify-between items-center px-8 py-4">
        <Navbar />
        <button
          onClick={toggleTheme}
          className="bg-gray-800 text-white dark:bg-white dark:text-gray-800 px-4 py-2 ml-8 rounded-md w-[130px] h-[50px]"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className={`w-full ${isDarkMode ? "bg-primary" : "bg-white"} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
    
      <div className={`${isDarkMode ? "bg-primary" : "bg-white"} ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <ProductSlider />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
