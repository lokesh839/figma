import React from 'react';
import ListItem from '../atoms/ListItem';

const FeaturesList = ({ features, isHighlighted }) => {
    return (
        <ul className="mb-6 space-y-2 ">
            {features.map((feature, index) => (
                <ListItem key={index} text={feature} isHighlighted={isHighlighted} />
            ))}
        </ul>
    );
};

export default FeaturesList;
