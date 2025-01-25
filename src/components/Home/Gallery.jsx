import React from 'react';
import One from '../../assets/About.jpg';
import Two from '../../assets/Home.webp';
import Three from '../../assets/large.jpg';
import Four from '../../assets/palash.webp';
import Five from '../../assets/small.jpg';
import Six from '../../assets/baranti.webp';
import Seven from '../../assets/recep.jpg';
import Eight from '../../assets/flower.jpg';
import Nine from '../../assets/room1.jpg';
import Tenth from '../../assets/mithonDam.webp';
import { useInView } from 'react-intersection-observer';

const Gallery = () => {
  const [ref,InView]=useInView({triggerOnce: true, threshold:0.2});
  return (
    <div className='mb-[-70px]'>
      <p
        ref={ref}
        className={`text-center mb-8 font-serif text-xl ${
          InView ? 'animate-fadeRight opacity-0' : 'opacity-0'
        }`}
        style={{
          animationDuration: '1s',
          animationDelay: '0.5s',
          animationFillMode: 'forwards',
        }}
      >
        GALLERY ____
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 grid-rows-4">
        <img src={One} className="col-span-1 row-span-2 h-96 w-full object-cover" />
        <img src={Two} className="h-48 w-full object-cover col-span-2 sm:order-4 md:order-2 lg:order-2" />
        <img src={Three} className="h-48 w-full object-cover sm:order-3 md:order-3 lg:order-3" />
        <img src={Four} className="h-48 w-full object-cover sm:order-2 md:order-4 lg:order-4" />
        <img src={Five} className="h-48 w-full object-cover sm:order-5 md:order-5 lg:order-5" />
        <img src={Six} className="col-span-2 h-48 w-full object-cover sm:order-7 md:order-6 lg:order-6" />
        <img src={Seven} className="h-48 w-full object-cover sm:order-6 md:order-7 lg:order-7" />
        <img src={Eight} className="h-48 w-full object-cover sm:order-8 md:order-8 lg:order-8" />
        <img src={Nine} className="col-span-2 h-48 w-full object-cover sm:order-10 md:order-9 lg:order-9" />
        <img src={Tenth} className="h-48 w-full object-cover sm:order-9 md:order-10 lg:order-10" />
      </div>
    </div>
  );
};

export default Gallery;
