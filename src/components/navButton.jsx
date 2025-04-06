import React from 'react';

export default function NavButton({ icon: Icon }) {
  return (
    <div className="flex items-center justify-center p-3 ">
      <button className="relative group">
        {/* Button base/rim */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-200 to-gray-400 shadow-xl transform scale-105"></div>
        
        {/* Button face */}
        <div className="relative flex items-center justify-center w-18 h-18 rounded-full bg-purple-600 shadow-inner overflow-hidden transform transition-transform duration-200 hover:scale-95 active:scale-90">
          {/* Glossy overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-hard-dark"></div>
          
          {/* Highlight effect */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-white opacity-20 rounded-t-full"></div>
          
          {/* Shine effect */}
          <div className="absolute -top-4 -left-4 w-16 h-8 bg-white opacity-10 rotate-45 transform"></div>
          
          {/* Button text content */}
          <span className="relative text-white">
            {Icon ? <Icon className="text-4xl" /> : null}
          </span>
        </div>
      </button>
    </div>
  );
};
