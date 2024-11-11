import React from 'react';
import Price from '../atoms/Price';
import FeaturesList from '../molecules/FeaturesList';
import Buttonc from '../atoms/Buttonc';


const PricingCard = ({ plan, price, description, features, isHighlighted }) => {
    return (
        <div className={`border rounded-lg p-6 ${isHighlighted ? 'bg-blue-800 text-white' : 'bg-white'} shadow-md`}>
            <h3 className="text-xl font-bold mb-2 text-left">{plan}</h3>
            <Price amount={price} isHighlighted={isHighlighted} />
            <p className={`mb-4 text-left ${isHighlighted ? 'text-white' : 'text-gray-600'}`}>{description}</p>
            <FeaturesList features={features} isHighlighted={isHighlighted} />
            <Buttonc text="Get Started" isPrimary={isHighlighted} />
        </div>
    );
};

export default PricingCard;
