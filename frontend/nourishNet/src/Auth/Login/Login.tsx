import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex font-sans bg-gray-50">
            {/* Left Side - Image */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-earthGreen overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                    alt="Community Volunteering"
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12 text-white">
                    <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
                    <p className="text-lg opacity-90">
                        "The best way to find yourself is to lose yourself in the service of others."
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                    <Link to="/" className="inline-flex items-center text-gray-500 hover:text-earthGreen mb-8 transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>

                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-earthGreen mb-4">
                            <Leaf className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800">Sign In</h2>
                        <p className="text-gray-500 mt-2">Access your NourishNet account</p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-earthGreen/20 focus:border-earthGreen outline-none transition-all bg-gray-50 focus:bg-white"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-earthGreen/20 focus:border-earthGreen outline-none transition-all bg-gray-50 focus:bg-white"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-gray-600 cursor-pointer select-none">
                                <input type="checkbox" className="w-4 h-4 mr-2 rounded text-earthGreen focus:ring-earthGreen border-gray-300" />
                                Remember me
                            </label>
                            <a href="#" className="text-earthGreen font-semibold hover:underline">Forgot Password?</a>
                        </div>

                        <button className="w-full bg-earthGreen text-white py-3.5 rounded-xl font-bold text-lg hover:bg-[#23461f] transition-all shadow-lg hover:shadow-earthGreen/30 transform hover:-translate-y-0.5">
                            Sign In
                        </button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            
                        </div>

                        
                    </form>

                    <div className="mt-8 text-center text-gray-600">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-earthGreen font-bold hover:underline">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
