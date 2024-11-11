import React from 'react';
import Heding from '../atoms/Heding';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';

const Worktext = () => (
    <div className=" sm:w-1/2 md:ml-20 mt-8 md:mt-0 text-left">
        <Heding>Work  <span className=' underline decoration-4 decoration-yellow-300'>together</span></Heding>
        <Paragraph>
            With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
        </Paragraph><br />
        <Button>Try it now &rarr;</Button>
    </div>
);

export default Worktext;