import React, { useState } from 'react';
import { Plus, Clock, TrendingUp, Package, X } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RestaurantDashboard: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    // Mock Data
    const activeDonations = [
        { id: 1, food: "5 Large Pizzas", time: "Expires in 2h", status: "Claimed", volunteer: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" },
        { id: 2, food: "10 Sandwiches", time: "Expires in 4h", status: "Pending", volunteer: null },
        { id: 3, food: "Tray of Pasta", time: "Expires in 1h", status: "Claimed", volunteer: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" },
    ];

    const impactData = [
        { name: 'Week 1', donations: 12 },
        { name: 'Week 2', donations: 19 },
        { name: 'Week 3', donations: 15 },
        { name: 'Week 4', donations: 25 },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-8 py-5 flex justify-between items-center sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <div className="bg-earthGreen/10 p-2 rounded-lg">
                        <Package className="w-6 h-6 text-earthGreen" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Restaurant Manager</h1>
                        <p className="text-xs text-gray-500">Joe's Pizza - Downtown</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-gray-800">Joe Smith</p>
                        <p className="text-xs text-gray-500">Manager</p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-8">
                {/* Hero Action */}
                <div className="mb-10 text-center">
                    <button
                        onClick={() => setShowModal(true)}
                        className="group relative inline-flex items-center justify-center gap-3 bg-earthGreen text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-[#23461f] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full md:w-auto overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <Plus className="w-8 h-8" />
                        Flash Donate
                    </button>
                    <p className="mt-3 text-gray-500">Post surplus food in seconds</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Active Status */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-earthGreen" /> Active Donations
                            </h2>
                            <span className="bg-green-100 text-earthGreen px-3 py-1 rounded-full text-xs font-bold">3 Active</span>
                        </div>

                        <div className="space-y-4">
                            {activeDonations.map((donation) => (
                                <div key={donation.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-200 transition-colors">
                                    <div>
                                        <h3 className="font-bold text-gray-800">{donation.food}</h3>
                                        <p className="text-sm text-red-500 font-medium mt-1">{donation.time}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {donation.status === 'Claimed' ? (
                                            <div className="flex items-center gap-2 bg-green-100 px-3 py-1.5 rounded-lg">
                                                <img src={donation.volunteer!} alt="Volunteer" className="w-6 h-6 rounded-full" />
                                                <span className="text-xs font-bold text-earthGreen">Claimed</span>
                                            </div>
                                        ) : (
                                            <span className="bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-lg text-xs font-bold">Pending</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Impact History */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-earthGreen" /> Impact History
                            </h2>
                            <select className="bg-gray-50 border-none text-sm font-medium text-gray-600 rounded-lg focus:ring-0 cursor-pointer">
                                <option>This Month</option>
                                <option>Last Month</option>
                            </select>
                        </div>

                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={impactData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
                                    <Tooltip
                                        cursor={{ fill: '#f9fafb' }}
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                                    />
                                    <Bar dataKey="donations" fill="#2D5A27" radius={[6, 6, 0, 0]} barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </main>

            {/* Flash Donate Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl w-full max-w-lg p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Package className="w-8 h-8 text-earthGreen" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">Flash Donate</h2>
                            <p className="text-gray-500">Quickly list surplus food</p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Food Description</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-earthGreen/20 focus:border-earthGreen outline-none transition-all"
                                    placeholder="e.g., 5 Pepperoni Pizzas"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Estimated Portions</label>
                                <input
                                    type="number"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-earthGreen/20 focus:border-earthGreen outline-none transition-all"
                                    placeholder="e.g., 15"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Expiry Time</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-earthGreen/20 focus:border-earthGreen outline-none transition-all bg-white">
                                    <option>1 Hour</option>
                                    <option>2 Hours</option>
                                    <option>3 Hours</option>
                                    <option>End of Day</option>
                                </select>
                            </div>

                            <button className="w-full bg-earthGreen text-white py-4 rounded-xl font-bold text-lg hover:bg-[#23461f] transition-all shadow-lg hover:shadow-earthGreen/30 mt-4">
                                Post Donation
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RestaurantDashboard;
