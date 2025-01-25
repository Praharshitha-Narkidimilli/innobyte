import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <div className="bg-black w-full p-6 h-auto md:h-[83vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 md:mt-12 p-4 md:p-6">
        <div className="text-white w-full">
          <h3 className="text-lg md:text-xl font-bold mb-4">
            Kingsukh<br />Guest<br />House<br />
          </h3>
          <p className="mb-4 text-gray-400 text-sm md:text-base">
            Discover a world of comfort, luxury, and adventure as you explore our curated selection of hotels, making every moment of your getaway truly extraordinary.
          </p>
          <a
            href="https://wa.link/at5ion"
            className="bg-pink-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-pink-800 inline-block text-sm md:text-base"
          >
            BOOK NOW
          </a>
        </div>
        <div className="text-white w-full">
          <h3 className="text-md md:text-lg font-bold mb-4">QUICK LINKS</h3><br />
          <ul className="space-y-2 text-sm md:text-base">
            <li><a href="" className="text-gray-400 hover:font-bold hover:text-white">Browse Destinations</a></li>
            <li><a href="" className="text-gray-400 hover:font-bold hover:text-white">Special Offers & Packages</a></li>
            <li><a href="" className="text-gray-400 hover:font-bold hover:text-white">Room Types & Amenities</a></li>
            <li><a href="" className="text-gray-400 hover:font-bold hover:text-white">Customer Reviews & Ratings</a></li>
            <li><a href="" className="text-gray-400 hover:font-bold hover:text-white">Travel Tips & Guides</a></li>
          </ul>
        </div>
        <div className="text-white w-full">
          <h3 className="text-md md:text-lg font-bold mb-4">OUR SERVICES</h3><br />
          <ul className="space-y-2 text-sm md:text-base">
            <li><a href="" className="text-gray-400 hover:font-bold hover:text-white">Concierge Assistance</a></li>
            <li><a href="" className="text-gray-400 hover:font-bold hover:text-white">Flexible Booking Options</a></li>
            <li><a href="" className="text-gray-400 hover:font-bold hover:text-white">Airport Transfers</a></li>
            <li><a href="" className="text-gray-400 hover:font-bold hover:text-white">Wellness & Recreation</a></li>
          </ul>
        </div>
        <div className="text-white w-full">
          <h3 className="text-md md:text-lg font-bold mb-4">CONTACT US</h3><br />
          <p className="mb-2 text-sm md:text-base">
            <a
              href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA"
              className="text-gray-400 hover:font-bold hover:text-white"
            >
              Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
            </a>
          </p>
          <p className="mb-2 text-sm md:text-base">
            <a href="mailto:kkghosh009@gmail.com" className="text-gray-400 hover:font-bold hover:text-white">
              kkghosh009@gmail.com
            </a>
          </p>
          <p className="mb-2 text-sm md:text-base">
            <a
              href="tel:+919007062180"
              className="text-gray-400 hover:font-bold hover:text-white"
              aria-label="Call us at +91 9007062180"
            >
              +91 9007062180
            </a>
          </p>
          <div className="flex gap-4 justify-start text-lg md:text-2xl mt-4 md:mt-8 p-2">
            <a href="#" className="hover:scale-110">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/kingsukhguesthouse/" className="hover:scale-110">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:scale-110">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:scale-110">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black w-full text-gray-400 text-center mt-10 sm:mt-12 md:mt-16 xl:mt-24 text-xs sm:text-sm md:text-base lg:mt-10 2xl:mt-24">
        <p>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
      </div>

    </div>
  );
}

export default Footer;
