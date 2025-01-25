import React from "react";

const Nav = () => {
  return (
    <div>
      <ul className="flex gap-8">
        {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map((item, index) => (
          <li
            key={index}
            className="relative group uppercase cursor-pointer text-white transition-transform duration-300 transform hover:-translate-y-1 hover:text-primary"
          >
            <a href={`#${item.toLowerCase()}`} className="relative z-10">
              {item}
            </a>
            <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-primary transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
