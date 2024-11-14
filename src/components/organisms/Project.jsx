import React from 'react';
import Textpro from '../molecules/Textpro';


const Project = () => (


<div className="mx-auto flex items-center bg-white py-20 px-56 bg-[url('./images/line1.png')] bg-no-repeat bg-left-bottom bg-[length:400px_400px] md:bg-[length:400px_400px]">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Textpro />
        <div className="w-1/2 md:w-1/2">
            <img src="./images/container2.png" alt="Project Management" />
        </div>
    </div>
</div>


);

export default Project;
