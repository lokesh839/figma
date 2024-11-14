// 
import React from 'react';

const   Heding = ({ children,className }) => (
    <h1 className={`text-5xl font-bold  mb-4 leading-tight  ${className}`}>
        {children}
    </h1>
);

export default Heding;

// const Heading = ({ title, highlight }) => {
//     return (
//         <div>
//             <h2 className="text-4xl font-bold">
//                 {title}
//             </h2>
//             <div className="relative inline-block">
//                 <span className="text-4xl font-bold">{highlight}</span>
//                 <div className=" w-full absolute inset-x-0 bottom-0 h-1 bg-yellow-300 -z-10"></div>
//             </div>
//         </div>
//     );
// };

// export default Heading;
