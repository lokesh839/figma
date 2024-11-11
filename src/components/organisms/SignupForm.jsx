import React from 'react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

const SignupForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Signup Successful!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormField id="name" label="Full Name" type="text" placeholder="Enter your full name" required />
            <FormField id="email" label="Email" type="email" placeholder="Enter your email" required />
            <FormField id="password" label="Password" type="password" placeholder="Create a password" required />
            <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                    <input type="checkbox" className="mr-2 leading-tight" />
                    <span className="text-sm">I agree to the terms and conditions</span>
                </label>
            </div>
            <Button type="submit">Sign Up</Button>
        </form>
    );
};

export default SignupForm;
