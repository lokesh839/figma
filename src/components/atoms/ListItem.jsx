import React from 'react';

const ListItem = ({ text, isHighlighted }) => {
    return (
        <li className={`flex items-center space-x-2 text-left ${isHighlighted ? 'text-white' : 'text-gray-600'}`}>
            <span>&#10003;</span> 
            <span>{text}</span>
        </li>
    );
};

export default ListItem;
