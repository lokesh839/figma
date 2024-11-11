import React from 'react';

const Dropdown = ({ label, options, isOpen, onToggle }) => (
    <div className="relative">
      <button onClick={onToggle} className="hover:text-gray-200 focus:outline-none">
            {label} &#9207;
        </button>
        {isOpen && (
            <div className="absolute mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                {options.map((option, index) => (
                    <a key={index} href={option.link} className="block px-4 py-2 hover:bg-gray-200">
                        {option.label}
                    </a>
                ))}
            </div>
        )}
    </div>
);

export default Dropdown;
