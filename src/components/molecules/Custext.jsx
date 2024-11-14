import React from 'react';
import Heding from '../atoms/Heding';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';

const Custext = () => (
    <div className=" w-1/2 md:w-1/2 md:ml-10 text-left">
        <Heding>Customize it to <br /><span className=' underline decoration-4 decoration-yellow-300'>your needs </span></Heding>
        <Paragraph>
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.        </Paragraph>
        <Button > Learn More &rarr;</Button>
    

    </div>
);

export default Custext;
