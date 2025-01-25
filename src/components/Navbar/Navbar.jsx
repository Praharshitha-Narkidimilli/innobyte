import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons
import Nav from "../Navbar/nav"; // Desktop navigation
import Nav2 from "../Navbar/nav2"; // Mobile navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle function for mobile menu

  useEffect(() => {
    const handleResize = () => {
      // Close the mobile menu on resize if the screen width is greater than 768px
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize); // Adding event listener on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener on unmount
    };
  }, []);

  return (
    <div className="py-6 bg-pink-600 md:bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-lg text-white">Kingsukh <br></br>Guest House</p>
        </div>


        <div className="hidden md:flex justify-between">
          <Nav />
        </div>

        <div className="hidden md:block">
          <a
            href="https://wa.link/at5ion"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 text-white px-7 py-3 rounded-xl hover:bg-pink-800 cursor-pointer"
          >
            BOOK
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white bg-transparent border-none cursor-pointer"
          >
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden mt-0 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="">
          <Nav2 />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
