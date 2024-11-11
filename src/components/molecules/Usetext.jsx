import React from 'react';
import Mainbutton from '../atoms/Button';
import Heding from '../atoms/Heding';
import Paragraph from '../atoms/Paragraph';

const Usetext = () => (
    <div className="md:w-2/5 mb-8 md:mr-20 text-left ">
        <Heding className=" text-5xl">Use as <span className=' underline decoration-4 decoration-yellow-300'>Extension</span></Heding>
        <Paragraph>
            For your next project, consider a Domain-specific tool. It works great for all extensions.
        </Paragraph>
        <Mainbutton>Learn More &rarr; </Mainbutton>
    </div>
);

export default Usetext;
