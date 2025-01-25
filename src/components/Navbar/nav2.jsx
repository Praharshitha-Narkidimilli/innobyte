import React from "react";

const Nav2 = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-pink-600">
      <ul className="flex flex-col items-center gap-4">
        {["Home", "About", "Services", "Rooms", "Gallery", "Contact"].map((item, index) => (
          <li key={index} className="text-white cursor-pointer hover:text-primary">
            <a href={`#${item.toLowerCase()}`} className="relative z-10">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav2;
