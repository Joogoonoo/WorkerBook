import  { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = {
  username: string;
  email?: string;
  profilePic?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<boolean>;
  loginWithFacebook: () => Promise<boolean>;
  register: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage for user data on initial load
    const storedUser = localStorage.getItem('workerbook_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simple validation for demo
    if (!username || !password) return false;
    
    // In a real app, you would verify credentials with a backend
    // For demo, we'll just create a user object
    const newUser = { username };
    
    // Store in localStorage
    localStorage.setItem('workerbook_user', JSON.stringify(newUser));
    
    setUser(newUser);
    setIsAuthenticated(true);
    return true;
  };

  const loginWithGoogle = async (): Promise<boolean> => {
    // In a real app, this would integrate with Google OAuth
    // For demo purposes, we'll simulate a successful login
    const googleUser = {
      username: 'गूगल उपयोगकर्ता',
      email: 'user@gmail.com',
      profilePic: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=100&h=100'
    };
    
    localStorage.setItem('workerbook_user', JSON.stringify(googleUser));
    
    setUser(googleUser);
    setIsAuthenticated(true);
    return true;
  };

  const loginWithFacebook = async (): Promise<boolean> => {
    // In a real app, this would integrate with Facebook OAuth
    // For demo purposes, we'll simulate a successful login
    const fbUser = {
      username: 'फेसबुक उपयोगकर्ता',
      email: 'user@facebook.com',
      profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100'
    };
    
    localStorage.setItem('workerbook_user', JSON.stringify(fbUser));
    
    setUser(fbUser);
    setIsAuthenticated(true);
    return true;
  };

  const register = async (username: string, password: string): Promise<boolean> => {
    // Simple validation for demo
    if (!username || !password) return false;
    
    // In a real app, you would register with a backend
    // For demo, we'll just create a user object
    const newUser = { username };
    
    // Store in localStorage
    localStorage.setItem('workerbook_user', JSON.stringify(newUser));
    
    setUser(newUser);
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('workerbook_user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated, 
      login, 
      loginWithGoogle, 
      loginWithFacebook, 
      register, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
 
