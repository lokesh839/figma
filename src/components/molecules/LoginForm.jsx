import React from 'react';
import Index from '../atoms/Index';
import Button from '../atoms/Button';

const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <Index
            type="email" 
            id="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            label="Email" 
        />
        <Index
            type="password" 
            id="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            label="Password" 
        />
        <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
                <input type="checkbox" className="mr-2 leading-tight" />
                <span className="text-sm">Remember Me</span>
            </label>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
            </a>
        </div>
        <Button>Login</Button>
    </form>
);

export default LoginForm;
