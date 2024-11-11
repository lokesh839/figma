import React from 'react';

const Button = ({ children, className, onClick }) => (
    <button 
        onClick={onClick}
        className={` bg-blue-500  hover:bg-blue-500 text-white font-bold py-4 px-4   rounded  ${className}`}
    >
        {children}
    </button>
);

export default Button;
            