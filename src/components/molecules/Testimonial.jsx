import React from 'react';
import QuoteIcon from '../atoms/QuoteIcon';
import ClientInfo from '../atoms/ClientInfo';
import Images from '../atoms/Images';

const Testimonial= ({src, alt , quote, photo, name, position, isHighlighted }) => {
    return (
        <div
            className={`p-6 rounded-lg shadow-md ${
                isHighlighted ? 'bg-white' : 'bg-blue-400'
            }`}
        >
           <QuoteIcon src={src} alt={alt}/>
            <p className={`text-lg mb-6 text-left ${isHighlighted ? 'text-black' : 'text-white'}`}>{quote}</p>
            <hr className="border-t-2 border-gray-300 mb-4" />
            <div className="flex items-center">
                <Images src={photo} alt={name} className="w-15 h-12 rounded-full mr-2"/>
                <ClientInfo name={name} position={position} />
            </div>
        </div>
    );
};

export default Testimonial;

