import React from 'react';

const Paragraph = ({ children,className }) => (
    <p className={`mb-5 items-center text-left leading-7 text-sm  ${ className}`}>
        {children}
    </p>
);

export default Paragraph;
