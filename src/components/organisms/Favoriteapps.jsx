import React from 'react';
import Favtext from '../molecules/Favtext';

const Favoriteapps = () => (
    <div className="w-full mx-auto p-8 relative text-center bg-blue-900 text-white py-36 ">
        <div className=" max-w-7xl mx-auto p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <img src="/images/Apps.png" alt="Favorite Apps" className="" />
            </div>
           <Favtext/>
        </div>
    </div>
);

export default Favoriteapps;
