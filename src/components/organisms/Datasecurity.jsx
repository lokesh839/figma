import React from 'react';
import Datatext from '../molecules/Datatext';

const Datasecurity = () => (
    <div className=" bg-white w-full mx-auto p-8 flex flex-col md:flex-row items-center py-36 ">
        <div className=" max-w-7xl mx-auto p-8">
            <div className="flex flex-col md:flex-row items-center">
               <Datatext/>
                <div className="md:w-1/2 "> 
                    <img src="./images/Element.png" alt="Data Security"  />
                </div>
            </div><br /><br />
            <div className=" md:max-w-7xl mt-16 text-center  ">
                <h1 className="text-4xl font-bold mb-4 ">Our <span className=' underline decoration-4 decoration-yellow-400'>Sponsors</span></h1><br />
                <div className="flex justify-center space-x-10 ">
                    <img src="./images/sponsors.png" alt="Apple" className="h-12 w-full" />
                    
                </div>
            </div>
        </div>
    </div>
);

export default Datasecurity;
