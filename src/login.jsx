// import React from "react";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// function Login() {


//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         console.log('Email:', email);
//         console.log('Password:', password);

    
//     };
//     return (


//             <div className="bg-blue-300 flex items-center justify-center min-h-screen ">

//                 <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
//                     <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>

//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 placeholder="Enter your email"
//                                 required
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                         </div>
//                         <div className="mb-6">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
//                             <input
//                                 type="password"
//                                 id="password"
//                                 placeholder="Enter your password"
//                                 required
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                             />
//                         </div>
//                         <div className="flex items-center justify-between mb-4">
//                             <label className="flex items-center">
//                                 <input type="checkbox" className="mr-2 leading-tight" />
//                                 <span className="text-sm">Remember Me</span>
//                             </label>
//                             <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
//                                 Forgot Password?
//                             </a>
//                         </div>
//                         <button type="submit"  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
//                             Login
//                         </button>
//                     </form>

//                     <div className="text-center mt-4">
//                         <p className="text-sm">Don't have an account? <Link to="/singuppage" href="#" className="text-blue-500 hover:text-blue-800">Sign Up</Link></p>
//                     </div>
//                 </div>
//             </div>

        
//     )
// }
// export default Login;