import React from 'react';
import SignupForm from '../organisms/SignupForm';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
                <SignupForm />
                <div className="text-center mt-4">
                    <p className="text-sm">Already have an account? <Link to='/login'href="#" className="text-blue-500 hover:text-blue-800">Login</Link></p>
                </div>
            </div>
        </div>
    );
};  

export default SignupPage;
