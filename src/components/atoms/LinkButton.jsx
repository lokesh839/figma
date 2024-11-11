import React from 'react';

const LinkButton = ({ children, to, className }) => (
    <a
        href={to}
        className={`bg-yellow-200 text-blue-600 px-4  py-3 rounded ${className}`}
    >
        {children}
    </a>
);

export default LinkButton;
