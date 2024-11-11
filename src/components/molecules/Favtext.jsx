import React from 'react';
import Heding from '../atoms/Heding';
import Paragraph from '../atoms/Paragraph';
import Button from '../atoms/Button';

const Favtext = () => (
    <div className="md:w-1/2 md:pl-8 text-left ">
        <Heding>Work with Your <br />Favorite Apps Using <br />whitespace</Heding>
        <Paragraph>
            Whitespace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.      </Paragraph>
        <Button>Read More &rarr;</Button>
    </div>
);

export default Favtext;
