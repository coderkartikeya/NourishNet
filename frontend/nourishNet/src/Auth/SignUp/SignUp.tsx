import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Utensils } from 'lucide-react';

const SignUp: React.FC = () => {
    const [role, setRole] = useState<'donor' | 'volunteer'>('donor');

    return (
        <div className="min-h-screen flex font-sans bg-gray-50">
            {/* Left Side - Image */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-earthGreen overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                    alt="Food Donation"
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12 text-white">
                    <h2 className="text-4xl font-bold mb-4">Join the Movement</h2>
                    <p className="text-lg opacity-90">
                        "Together we can bridge the gap between abundance and scarcity."
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                    <Link to="/" className="inline-flex items-center text-gray-500 hover:text-earthGreen mb-6 transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>

                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
                        <p className="text-gray-500 mt-2">Start your journey with NourishNet</p>
                    </div>

                    {/* Role Toggle */}
                    <div className="bg-gray-100 p-1 rounded-xl flex mb-8">
                        <button
                            onClick={() => setRole('donor')}
                            className={`flex-1 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${role === 'donor'
                                ? 'bg-white text-earthGreen shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <Utensils className="w-4 h-4" /> Restaurant/Donor
                        </button>
                        <button
                            onClick={() => setRole('volunteer')}
                            className={`flex-1 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${role === 'volunteer'
                                ? 'bg-white text-earthGreen shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <User className="w-4 h-4" /> Volunteer
                        </button>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-earthGreen/20 focus:border-earthGreen outline-none transition-all bg-gray-50 focus:bg-white"
                                placeholder="John Doe"
                            />
                        </div>
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
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">Location</label>
                            <div className="relative">
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-earthGreen/20 focus:border-earthGreen outline-none transition-all bg-gray-50 focus:bg-white appearance-none text-gray-700">
                                    <option value="" disabled selected>Select your city</option>
                                    <option value="new-york">New York</option>
                                    <option value="los-angeles">Los Angeles</option>
                                    <option value="chicago">Chicago</option>
                                    <option value="houston">Houston</option>
                                    <option value="phoenix">Phoenix</option>
                                    <option value="other">Other</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-earthGreen text-white py-3.5 rounded-xl font-bold text-lg hover:bg-[#23461f] transition-all shadow-lg hover:shadow-earthGreen/30 transform hover:-translate-y-0.5 mt-2">
                            Create Account
                        </button>
                    </form>

                    <div className="mt-8 text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-earthGreen font-bold hover:underline">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
