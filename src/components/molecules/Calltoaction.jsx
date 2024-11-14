import React from 'react';
import Button from '../atoms/Button';

const Calltoaction = () => (
    <div className="flex-grow flex flex-col items-center justify-center text-center p-8 md:bg-blue-900 bg-sky-500 text-white py-36 ">
        <h1 className="text-5xl font-bold mb-4 leading-tight">Try Whitepace <br />today</h1>
        <p className="mb-6">Get started for free.<br />Add your whole team as your needs grow.</p>
        <Button href="#">Try Tasky Free &rarr;</Button>
        <p className="mt-8">On a big team? Contact sales</p>
        <div className="flex justify-center space-x-4 mt-2">
            <img src="./images/app.png" alt="log" className='h-7 '/>
    
        </div>
    </div>
);

export default Calltoaction;

