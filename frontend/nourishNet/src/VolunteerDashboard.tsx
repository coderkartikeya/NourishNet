import React, { useState } from 'react';
import { Bell, MapPin, User, Clock, BarChart2, Menu, LogOut, CheckCircle, Navigation } from 'lucide-react';
import MapComponent from './components/MapComponent';
import { Link } from 'react-router-dom';

const VolunteerDashboard: React.FC = () => {
    const [isOnline, setIsOnline] = useState(true);
    const [selectedAlert, setSelectedAlert] = useState<any>(null);

    // Mock Data
    const alerts = [
        { id: 1, lat: 40.7128, lng: -74.0060, restaurant: "Joe's Pizza", food: "5 Large Pizzas", distance: "0.8 km" },
        { id: 2, lat: 40.7200, lng: -74.0100, restaurant: "Fresh Market", food: "Box of Vegetables", distance: "1.2 km" },
        { id: 3, lat: 40.7150, lng: -73.9900, restaurant: "Daily Bagel", food: "Assorted Pastries", distance: "2.5 km" },
    ];

    const recentActivity = [
        { id: 1, user: "Sarah M.", action: "rescued 5kg food", time: "10m ago" },
        { id: 2, user: "Mike T.", action: "delivered to Shelter A", time: "25m ago" },
        { id: 3, user: "You", action: "completed a pickup", time: "2h ago" },
    ];

    return (
        <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col z-20 shadow-sm">
                <div className="p-6 flex items-center gap-2 text-earthGreen font-bold text-xl">
                    <MapPin className="w-6 h-6" /> NourishNet
                </div>

                <nav className="flex-1 px-4 space-y-2 mt-4">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 bg-green-50 text-earthGreen rounded-xl font-medium transition-colors">
                        <Navigation className="w-5 h-5" /> Available Pickups
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-earthGreen rounded-xl font-medium transition-colors">
                        <Clock className="w-5 h-5" /> My History
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-earthGreen rounded-xl font-medium transition-colors">
                        <BarChart2 className="w-5 h-5" /> Impact Stats
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-earthGreen rounded-xl font-medium transition-colors">
                        <User className="w-5 h-5" /> Profile
                    </a>
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <Link to="/" className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl font-medium transition-colors">
                        <LogOut className="w-5 h-5" /> Logout
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative">
                {/* Top Bar */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10 shadow-sm">
                    <div className="flex items-center gap-4">
                        <button className="md:hidden p-2 text-gray-600">
                            <Menu className="w-6 h-6" />
                        </button>
                        <h1 className="text-xl font-bold text-gray-800 hidden sm:block">Volunteer Dashboard</h1>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3 bg-gray-100 rounded-full p-1 pr-4">
                            <button
                                onClick={() => setIsOnline(!isOnline)}
                                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${isOnline ? 'bg-earthGreen text-white shadow-sm' : 'text-gray-500'}`}
                            >
                                Online
                            </button>
                            <button
                                onClick={() => setIsOnline(!isOnline)}
                                className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${!isOnline ? 'bg-gray-500 text-white shadow-sm' : 'text-gray-500'}`}
                            >
                                Offline
                            </button>
                        </div>
                        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-earthGreen font-bold border-2 border-white shadow-sm">
                            JD
                        </div>
                    </div>
                </header>

                {/* Map Area */}
                <div className="flex-1 relative bg-gray-200">
                    <MapComponent alerts={alerts} onAlertClick={setSelectedAlert} />

                    {/* Sidebar Card (Overlay) */}
                    {selectedAlert && (
                        <div className="absolute top-6 right-6 w-80 bg-white rounded-2xl shadow-2xl p-6 z-[1000] border border-gray-100 animate-in slide-in-from-right-10 duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">{selectedAlert.restaurant}</h3>
                                    <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                                        <Navigation className="w-3 h-3" /> {selectedAlert.distance} away
                                    </p>
                                </div>
                                <button onClick={() => setSelectedAlert(null)} className="text-gray-400 hover:text-gray-600">
                                    &times;
                                </button>
                            </div>

                            <div className="bg-green-50 p-4 rounded-xl mb-6 border border-green-100">
                                <p className="text-sm font-medium text-gray-600 mb-1">Available Food:</p>
                                <p className="text-earthGreen font-bold text-lg">{selectedAlert.food}</p>
                            </div>

                            <button className="w-full bg-earthGreen text-white py-3 rounded-xl font-bold hover:bg-[#23461f] transition-all shadow-lg hover:shadow-earthGreen/30 transform hover:-translate-y-0.5">
                                Claim Pickup
                            </button>
                        </div>
                    )}

                    {/* Recent Activity (Overlay) */}
                    <div className="absolute bottom-6 left-6 w-80 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-5 z-[1000] border border-gray-100 hidden md:block">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Recent Activity</h4>
                        <div className="space-y-4">
                            {recentActivity.map((activity) => (
                                <div key={activity.id} className="flex items-start gap-3">
                                    <div className="mt-1">
                                        <CheckCircle className="w-4 h-4 text-earthGreen" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-800">
                                            <span className="font-bold">{activity.user}</span> {activity.action}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerDashboard;
