import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, Search, Bell, User, Users, Building, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Users className="h-8 w-8" />
              <span className="text-xl font-bold">WorkerBook</span>
            </Link>
            
            <div className="hidden md:flex ml-8 space-x-6">
              <Link to="/" className="hover:text-blue-200">कार्यकर्ता</Link>
              <Link to="/contractors" className="hover:text-blue-200">ठेकेदार</Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center">
            <div className="relative mr-4">
              <input 
                type="text" 
                placeholder="खोजें..." 
                className="bg-blue-500 text-white placeholder-blue-200 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-white w-64"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-blue-200" />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Bell className="h-6 w-6 cursor-pointer" />
            <div className="flex items-center space-x-2">
              {user?.profilePic ? (
                <img 
                  src={user.profilePic} 
                  alt={user.username} 
                  className="h-8 w-8 rounded-full border-2 border-white"
                />
              ) : (
                <User className="h-6 w-6" />
              )}
              <span>{user?.username || 'उपयोगकर्ता'}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center text-white hover:text-blue-200"
            >
              <LogOut className="h-5 w-5 mr-1" />
              <span>लॉगआउट</span>
            </button>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="खोजें..." 
                className="bg-blue-500 text-white placeholder-blue-200 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-white w-full"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-blue-200" />
            </div>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>कार्यकर्ता</span>
              </Link>
              <Link to="/contractors" className="flex items-center space-x-2">
                <Building className="h-5 w-5" />
                <span>ठेकेदार</span>
              </Link>
              <div className="flex items-center space-x-2 pb-2">
                {user?.profilePic ? (
                  <img 
                    src={user.profilePic} 
                    alt={user.username} 
                    className="h-5 w-5 rounded-full border-2 border-white"
                  />
                ) : (
                  <User className="h-5 w-5" />
                )}
                <span>{user?.username || 'उपयोगकर्ता'}</span>
              </div>
              <button 
                onClick={handleLogout}
                className="flex items-center text-white hover:text-blue-200"
              >
                <LogOut className="h-5 w-5 mr-2" />
                <span>लॉगआउट</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function CloseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
 
