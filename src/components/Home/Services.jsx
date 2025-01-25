import React from 'react';
import { useInView } from 'react-intersection-observer'; // Import the useInView hook
import Palash from '../../assets/palash.webp';

export default function Services() {
  // Create in-view hooks for each list item (li)
  const [service1Ref, service1InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [service2Ref, service2InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [service3Ref, service3InView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [service4Ref, service4InView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="relative mb-36">
      {/* Background Image */}
      <div
        className="w-full h-[84vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${Palash})` }}
      ></div>

      {/* Text Overlay */}
      <div className="absolute top-[0%] bg-white w-[90%] left-[5%] md:left-[50%] md:w-[46%] h-[84vh] p-8">
        <p className="text-sm uppercase text-pink-500 font-medium">Services</p>
        <h1 className="text-5xl font-bold leading-tight text-gray-800 mt-2">
          Strive Only For The <br />
          Best.
        </h1>
        <ul className="mt-8 space-y-6">
          <li
            ref={service1Ref}
            className={`flex items-center ${
              service1InView ? 'animate-fadeRight opacity-0' : 'opacity-0'
            }`}
            style={{
              animationDuration: '1s',
              animationDelay: '0.25s',
              animationFillMode: 'forwards',
            }}
          >
            <span className="w-10 h-10 bg-blue-100 text-blue-600 flex justify-center items-center rounded-full text-xl">
              <i className="fas fa-shield-alt"></i>
            </span>
            <span className="ml-4 text-xl font-medium">High Class Security</span>
          </li>

          <li
            ref={service2Ref}
            className={`flex items-center ${
              service2InView ? 'animate-fadeRight opacity-0' : 'opacity-0'
            }`}
            style={{
              animationDuration: '1s',
              animationDelay: '0.5s',
              animationFillMode: 'forwards',
            }}
          >
            <span className="w-10 h-10 bg-pink-100 text-pink-600 flex justify-center items-center rounded-full text-xl">
              <i className="fas fa-clock"></i>
            </span>
            <span className="ml-4 text-xl font-medium">24 Hours Room Service</span>
          </li>

          <li
            ref={service3Ref}
            className={`flex items-center ${
              service3InView ? 'animate-fadeRight opacity-0' : 'opacity-0'
            }`}
            style={{
              animationDuration: '1s',
              animationDelay: '0.75s',
              animationFillMode: 'forwards',
            }}
          >
            <span className="w-10 h-10 bg-purple-100 text-purple-600 flex justify-center items-center rounded-full text-xl">
              <i className="fas fa-utensils"></i>
            </span>
            <span className="ml-4 text-xl font-medium">Restaurant</span>
          </li>

          <li
            ref={service4Ref}
            className={`flex items-center ${
              service4InView ? 'animate-fadeRight opacity-0' : 'opacity-0'
            }`}
            style={{
              animationDuration: '1s',
              animationDelay: '1s',
              animationFillMode: 'forwards',
            }}
          >
            <span className="w-10 h-10 bg-red-100 text-red-600 flex justify-center items-center rounded-full text-xl">
              <i className="fas fa-map"></i>
            </span>
            <span className="ml-4 text-xl font-medium">Tourist Guide Support</span>
          </li>
        </ul>
      </div>

      {/* Footer Section */}
      <div className="inset-x-0 top-[calc(100vh-75px)] flex justify-around items-center bg-white w-[93%] h-32 mx-auto rounded-lg shadow-2xl py-4 z-10 mt-20">
        <div>
          <h2 className="font-semibold text-3xl text-center">100+</h2>
          <h5 className="text-xl">Bookings Completed</h5>
        </div>
        <div>
          <h2 className="font-semibold text-3xl text-center">150+</h2>
          <h5 className="text-xl">Happy Customers</h5>
        </div>
      </div>
    </div>
  );
}
