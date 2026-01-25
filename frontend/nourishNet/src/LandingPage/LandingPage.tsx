import React from 'react';
import { Leaf, Heart, Truck, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            <nav className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <div className="text-2xl font-bold text-earthGreen flex items-center gap-2">
                    <Leaf className="w-6 h-6" />
                    NourishNet
                </div>
                <div className="hidden md:flex space-x-8 font-medium">
                    <a href="#hero" className="hover:text-earthGreen transition-colors duration-300">Home</a>
                    <a href="#impact" className="hover:text-earthGreen transition-colors duration-300">Impact</a>
                    <a href="#how-it-works" className="hover:text-earthGreen transition-colors duration-300">How it Works</a>
                    <a href="#about" className="hover:text-earthGreen transition-colors duration-300">About Us</a>
                </div>
                <Link to="/login" className="bg-earthGreen text-white px-6 py-2 rounded-full hover:bg-[#23461f] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Login
                </Link>
            </nav>

            <section id="hero" className="relative bg-gradient-to-br from-green-50 to-white py-20 px-6 md:py-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-green-100/30 rounded-l-full -mr-20 blur-3xl -z-10"></div>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left z-10">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-earthGreen mb-6 leading-tight tracking-tight">
                            Feeding People, <br /> Not Landfills
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            Connect surplus food with those in need. Join our mission to eliminate hunger and reduce food waste in your community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button className="bg-earthGreen text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#23461f] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 transform hover:-translate-y-1">
                                Donate Food <Heart className="w-5 h-5 fill-current" />
                            </button>
                            <button className="bg-white text-earthGreen border-2 border-earthGreen px-8 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 transform hover:-translate-y-1">
                                Become a Volunteer <Users className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center relative">
                        <div className="w-full max-w-md aspect-square bg-gradient-to-tr from-green-200 to-green-100 rounded-[2rem] flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                            <Leaf className="w-40 h-40 text-earthGreen drop-shadow-xl" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="impact" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { value: "15,000+", label: "Kgs of Food Saved" },
                            { value: "45,000+", label: "Meals Served" },
                            { value: "120+", label: "Active NGOs" }
                        ].map((stat, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-green-50 hover:bg-green-100 transition-colors duration-300">
                                <div className="text-5xl font-extrabold text-earthGreen mb-2">{stat.value}</div>
                                <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-20">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent -z-10"></div>

                        {[
                            { icon: Leaf, title: "1. List", desc: "Donors list surplus food details and pickup location in seconds." },
                            { icon: Users, title: "2. Match", desc: "Our platform instantly notifies nearby NGOs and volunteers." },
                            { icon: Truck, title: "3. Deliver", desc: "Volunteers pick up the food and deliver it to those in need." }
                        ].map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-8 border-4 border-green-100 group-hover:border-earthGreen transition-colors duration-300">
                                    <step.icon className="w-10 h-10 text-earthGreen" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed max-w-xs">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="about" className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10">About NourishNet</h2>
                    <p className="text-xl text-gray-600 leading-relaxed mb-10">
                        NourishNet is driven by a simple yet powerful mission: to solve hyperlocal hunger using real-time technology.
                        We believe that food belongs on plates, not in landfills. By bridging the gap between abundance and scarcity,
                        we are building a sustainable community network where everyone has access to nutritious food.
                    </p>
                    <a href="#" className="inline-flex items-center text-earthGreen font-bold text-lg hover:underline decoration-2 underline-offset-4 transition-all">
                        Read our full story <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </section>

            <footer className="bg-earthGreen text-white py-12 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 flex items-center gap-3">
                        <Leaf className="w-8 h-8" />
                        <span className="text-2xl font-bold tracking-wide">NourishNet</span>
                    </div>
                    <div className="text-sm opacity-80 font-medium">
                        &copy; {new Date().getFullYear()} NourishNet. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
