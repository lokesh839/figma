import React from 'react';
import Footerlink from './Footerlink';



const   Footercolum = ({ title, links }) => (
    <div>
        <h3 className="font-bold mb-2 text-gray-200">{title}</h3>
        <ul>
            {links.map((link, index) => (
                <Footerlink key={index} href={link.href}>
                    {link.text}
                </Footerlink>
            ))}
        </ul>
    </div>
);

export default Footercolum;
