import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../molecules/LoginForm';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        alert("Login button clicked!"); 
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
                <LoginForm 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword}   
                    handleSubmit={handleSubmit} 
                />
                <div className="text-center mt-4">
                    <p className="text-sm">Don't have an account? <Link to="/singuppage" className="text-blue-500 hover:text-blue-800">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
