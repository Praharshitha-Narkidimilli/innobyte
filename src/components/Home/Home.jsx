import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useInView } from 'react-intersection-observer';

function Home() {
  const [ref1, InView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, InView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  
  return (
    <div className="home">
      <div className="w-full min-h-[120vh] bg-cover bg-center bg-[url('src/assets/home.webp')] relative">
        <Navbar />
        {/* Middle text */}
        <div className="block text-center pt-52 sm:text-sm">
          <p
            ref={ref1}
            className={`text-xl text-slate-300 font-serif ${
              InView1 ? 'animate-fadeUpTop opacity-0' : 'opacity-0'
            }`}
            style={{
              animationFillMode: 'forwards',
            }}
          >
            Simple - Unique - Friendly
            <br />
          </p>
          <p
            ref={ref2}
            className={`text-6xl text-white font-semibold ${
              InView2 ? 'animate-fadeToDown opacity-0' : 'opacity-0'
            }`}
            style={{
              animationFillMode: 'forwards',
            }}
          >
            Make Yourself At Home
            <br />
            In Our <a href="/" className="text-pink-600">Guest House</a>.
          </p>
        </div>

        {/* Book Now Session */}
        <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex justify-center items-center bg-white w-11/12 rounded-lg shadow-lg py-6">
          <a
            href="https://wa.link/at5ion"
            className="bg-pink-600 font-semibold text-white px-6 py-3 rounded-xl hover:bg-pink-800"
          >
            BOOK NOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
