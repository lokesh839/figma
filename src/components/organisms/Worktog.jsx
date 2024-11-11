import React from 'react';
import Worktext from '../molecules/Worktext';

const Worktog = () => (
    <div className="bg-white shadow-lg  p-8  flex flex-col items-center w-full  ">
        <div className="max-w-7xl mx-auto p-8 justify-between flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 ">
                <img src="./images/WorkTogether.png" alt="Work Together" />
            </div>
            <Worktext/>
        </div>  
    </div>
);

export default Worktog;
