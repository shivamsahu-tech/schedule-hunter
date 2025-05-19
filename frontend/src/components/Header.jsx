import { Link, NavLink, useLocation } from "react-router-dom";


export default function Header() {     

    const location = useLocation()
    const isInput = location.pathname === '/input'

    return (
        <nav className="sticky top-0 z-50 bg-slate-50 shadow-md text-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                
                <div className="flex-shrink-0">
                    <Link to="/" className="text-2xl font-bold text-blue-600">
                    AI Planner
                    </Link>
                </div>

                <div className="hidden md:flex space-x-6">
                    <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        `text-gray-700 hover:text-blue-600 transition ${
                        isActive ? 'font-semibold text-blue-600' : ''
                        }`
                    }
                    >
                    Dashboard
                    </NavLink>
                    <NavLink
                    to="/schedule"
                    className={({ isActive }) =>
                        `text-gray-700 hover:text-blue-600 transition ${
                        isActive ? 'font-semibold text-blue-600' : ''
                        }`
                    }
                    >
                    Schedule
                    </NavLink>
                    <NavLink
                    to="/input"
                    className={({ isActive }) =>
                        `text-gray-700 hover:text-blue-600 transition ${
                        isActive ? 'font-semibold text-blue-600' : ''
                        }`
                    }
                    >
                    Input
                    </NavLink>
                </div>

                {!isInput && 
                    <div className="flex-shrink-0">
                        <Link
                        to="/input"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                        Generate Schedule
                        </Link>
                    </div>}

                </div>
            </div>
        </nav>
    );
    }
