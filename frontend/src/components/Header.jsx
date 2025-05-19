import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isInput = location.pathname === '/input';
  
  return (
    <header className="top-0 sticky z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Schedule Hunter
        </Link>
        
        <nav className="flex items-center gap-6">
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
          
          {!isInput && (
            <NavLink 
              to="/input" 
              className={({ isActive }) => 
                `bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition ${
                  isActive ? 'bg-blue-600' : ''
                }`
              }
            >
              Generate Schedule
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}