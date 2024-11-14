import React from 'react';
import Custext from '../molecules/Custext';

const Customizesction = () => (
    <div className="bg-white  w-full py-32 px-56 md:py-32 md:px-56 justify-around">
        <div className=" max-w-7xl mx-auto p-8 flex flex-col md:flex-row items-center">
            <div className=" w-1/2 md:w-1/2 ">
                <img src="./images/tool.png" alt="Customize Tool"  />
            </div>
          <Custext/>
        </div>
    </div>
);

export default Customizesction;