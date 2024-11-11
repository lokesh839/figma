import React from 'react';
import Heding from '../atoms/Heding';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';

const Workeverytext = () => (
    <div className=" lg:min-w-0 md:ml-14 font-bold  ">
        <Heding className=' text-6xl '>Your work, everywhere <span className=' underline decoration-4 decoration-sky-400'>you are</span></Heding>
        <Paragraph className=' md:min-w-0 text-center text-white mb-8 text-sm'>
            Access your notes from your computer, phone, or tablet by synchronizing with various services, including
            whitespace, Dropbox, and OneDrive. <br />The app is available on Windows, macOS, Linux, Android, and iOS. A
            terminal app is also available!        </Paragraph>
        <Button>Try Tasky &rarr;</Button>
    </div>
);

export default Workeverytext;
