import React from 'react';

const Price = ({ amount, isHighlighted }) => {
    return (
        <p className={`text-3xl font-semibold mb-4 text-left ${isHighlighted ? 'text-yellow-300' : ''}`}>
            {amount}
        </p>
    );
};

export default Price;
