import React from 'react';

const Footerlink = ({ href, children }) => (
    <li>
        <a href={href} className="hover:underline text-gray-200">
            {children}
        </a>
    </li>
);

export default Footerlink;
