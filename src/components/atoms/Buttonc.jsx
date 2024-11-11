import React from 'react';

const Buttonc = ({ text, isPrimary }) => {
    return (
        <button
            className={`py-2 px-4 rounded-lg md:float-left ${
                isPrimary
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'border border-yellow-300 text-black hover:bg-yellow-100'
            }`}
        >
            {text}
        </button>
    );
};

export default Buttonc;
