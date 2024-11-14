import React from 'react';
import Heding from '../atoms/Heding';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';

const Datatext = () => (
    <div className=" w-1/2 md:w-1/2 mb-8 md:mb-0 text-left">
        <Heding>100%  <span className=' underline decoration-4 decoration-yellow-400'>your data</span></Heding>
        <Paragraph>
            The app is open source and your notes are saved in an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no one but yourself can access them.
        </Paragraph>
        <Button>Read more &rarr;</Button>
    </div>
);

export default Datatext;
