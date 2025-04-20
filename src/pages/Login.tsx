import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Users, Lock, Mail, Facebook, Github } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, register, loginWithGoogle, loginWithFacebook } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      let success;
      
      if (isRegister) {
        success = await register(username, password);
      } else {
        success = await login(username, password);
      }
      
      if (success) {
        navigate('/');
      } else {
        setError(isRegister ? 'पंजीकरण विफल रहा' : 'लॉगिन विफल रहा');
      }
    } catch (err) {
      setError('कुछ गलत हो गया');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleGoogleLogin = async () => {
    setError('');
    setLoading(true);
    
    try {
      const success = await loginWithGoogle();
      if (success) {
        navigate('/');
      } else {
        setError('Google लॉगिन विफल रहा');
      }
    } catch (err) {
      setError('कुछ गलत हो गया');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  const handleFacebookLogin = async () => {
    setError('');
    setLoading(true);
    
    try {
      const success = await loginWithFacebook();
      if (success) {
        navigate('/');
      } else {
        setError('Facebook लॉगिन विफल रहा');
      }
    } catch (err) {
      setError('कुछ गलत हो गया');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex flex-col md:flex-row flex-1">
        <div className="bg-blue-600 text-white md:w-1/2 p-8 flex flex-col justify-center">
          <div className="max-w-md mx-auto">
            <div className="flex items-center mb-6">
              <Users className="h-10 w-10 mr-3" />
              <h1 className="text-3xl font-bold">WorkerBook</h1>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              दुनिया भर के कुशल श्रमिकों का एक मंच
            </h2>
            
            <p className="text-blue-100 text-lg mb-8">
              WorkerBook पर आपका स्वागत है - एक ऐसा प्लेटफॉर्म जहाँ मजदूर अपनी सेवाएँ प्रदर्शित कर सकते हैं और ग्राहक अपनी आवश्यकताओं के अनुसार कुशल कारीगरों को खोज सकते हैं।
            </p>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 bg-blue-500 rounded-full">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">सुरक्षित और विश्वसनीय</h3>
                  <p className="text-blue-100 text-sm">सत्यापित कारीगरों के साथ काम करें</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-blue-500 rounded-full">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">बड़ा नेटवर्क</h3>
                  <p className="text-blue-100 text-sm">हज़ारों कुशल श्रमिकों से जुड़ें</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 p-8 flex items-center justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-6">
                {isRegister ? 'नया खाता बनाएं' : 'अपने खाते में लॉगिन करें'}
              </h2>
              
              {error && (
                <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-4">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    उपयोगकर्ता नाम
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="अपना उपयोगकर्ता नाम दर्ज करें"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    पासवर्ड
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="अपना पासवर्ड दर्ज करें"
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full btn-primary py-2.5 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'प्रोसेसिंग...' : isRegister ? 'खाता बनाएं' : 'लॉगिन करें'}
                </button>
              </form>
              
              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setIsRegister(!isRegister)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  {isRegister ? 'पहले से ही एक खाता है? लॉगिन करें' : 'खाता नहीं है? साइन अप करें'}
                </button>
              </div>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">या इसके साथ जारी रखें</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                        <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"/>
                        <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"/>
                        <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"/>
                        <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"/>
                      </g>
                    </svg>
                    Google
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleFacebookLogin}
                    className="w-full flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <Facebook className="h-5 w-5 mr-2 text-blue-600" />
                    Facebook
                  </button>
                </div>
              </div>
            </div>
            
            <p className="mt-6 text-center text-sm text-gray-600">
              साइन इन करके, आप हमारी <Link to="/terms" className="text-blue-600 hover:text-blue-800 font-medium">सेवा की शर्तें</Link> और <Link to="/privacy" className="text-blue-600 hover:text-blue-800 font-medium">गोपनीयता नीति</Link> से सहमत होते हैं।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
