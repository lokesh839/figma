import React from 'react';
import InputField from '../atoms/InputField';

const FormField = ({ id, label, type, placeholder, required }) => {
    return <InputField 
    id={id} 
    label={label} 
    type={type} 
    placeholder={placeholder}
     required={required}
      />;
};

export default FormField;
