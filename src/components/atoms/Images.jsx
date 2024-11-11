import React from 'react';

const ClientPhoto = ({ src, alt }) => {
    return <img src={src} alt={alt} className="w-12 h-12 rounded-full" />;
};

export default ClientPhoto;
