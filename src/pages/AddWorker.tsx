import  { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload } from 'lucide-react';

export default function AddWorker() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('कार्यकर्ता का विवरण सफलतापूर्वक जमा किया गया!');
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="max-w-2xl mx-auto px-4">
          <Link to="/" className="flex items-center text-blue-600 mb-6">
            <ArrowLeft className="h-5 w-5 mr-1" />
            वापस जाएं
          </Link>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-6">
              <h1 className="text-2xl font-bold">नया कार्यकर्ता जोड़ें</h1>
              <p className="text-blue-100 mt-1">
                अपना विवरण भरें और WorkerBook समुदाय से जुड़ें
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    पूरा नाम
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    पेशा
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">पेशा चुनें</option>
                    <option>घर बनाने वाला मिस्त्री</option>
                    <option>कारपेंटर</option>
                    <option>पेंटर</option>
                    <option>इलेक्ट्रिशियन</option>
                    <option>प्लंबर</option>
                    <option>टाइल्स लगाने वाला मिस्त्री</option>
                    <option>सीलिंग बनाने वाला मिस्त्री</option>
                    <option>मजदूर</option>
                    <option>ड्राइवर</option>
                    <option>घरेलू नौकर</option>
                    <option>घर में खाना बनाने वाला कुक</option>
                    <option>बाग की देखभाल करने वाला</option>
                    <option>अन्य</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    स्थान
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    दर (₹/दिन)
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    फोन नंबर
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    विवरण
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    प्रोफाइल फोटो
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">
                      अपनी फोटो यहां खींचें और छोड़ें या
                    </p>
                    <button
                      type="button"
                      className="btn-secondary text-sm"
                    >
                      फाइल चुनें
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    कार्य के दौरान की गई फोटो (अधिकतम 3)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">
                      अपने काम की फोटो अपलोड करें
                    </p>
                    <button
                      type="button"
                      className="btn-secondary text-sm"
                    >
                      फाइल चुनें
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'प्रस्तुत किया जा रहा है...' : 'कार्यकर्ता जोड़ें'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} WorkerBook. सर्वाधिकार सुरक्षित।
          </p>
        </div>
      </footer>
    </div>
  );
}
 
