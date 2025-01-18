import React from 'react';
export default function Navbar() {
    return (
        <>
            <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center h-16">
               
                <div className="flex-shrink-">
                    <button className="text-green-700 hover:text-gray-600 font-bold text-2xl">
                    EcoPolis
                    </button>
                </div>

                
                <div className="flex space-x-4">
                    <button className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium">
                    Map
                    </button>
                    <button className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium">
                    About
                    </button>
                    <button className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium">
                    Solution
                    </button>
                    <button className="bg-green-700 text-white hover:bg-green-900 px-4 py-2 rounded-md font-medium">
                    Login
                    </button>
                </div>
                </div>
            </div>
            </nav>
        </>
    );
}