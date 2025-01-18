import React from 'react';
import { Leaf } from 'lucide-react';
import { useNavigate,useLocation } from 'react-router-dom';

export default function Navbar({setIsSidebarOpen, isSidebarOpen}) {
    const navigate  = useNavigate();
    const location = useLocation();
    return (
        <>
            <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center h-16">
               
                <div className="flex">
                <Leaf className="h-6 mt-1 mr-2 w-6 text-green-500" />
                    <button className="text-green-700 hover:text-gray-600 font-bold text-2xl" onClick={()=>navigate("/")}>
                    EcoPolis
                    </button>
                </div>

                
                <div className="flex space-x-4">
                    <button className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium">
                    About
                    </button>
                    <button className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium" onClick={()=>navigate("/map")}>
                    Map
                    </button>
                    <button className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium">
                    Analysis
                    </button>
                    <button className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium">
                    Upload
                    </button>
                    {location.pathname=="/map"?(<button className="bg-green-700 text-white hover:bg-green-900 px-4 py-2 rounded-md font-medium" onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
                    ChatBot
                    </button>):null}
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