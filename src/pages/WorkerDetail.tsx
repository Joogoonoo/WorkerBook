import  { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { workers } from '../data';
import { ArrowLeft, Phone, Star, MapPin, Camera, Calendar, Check } from 'lucide-react';

export default function WorkerDetail() {
  const { id } = useParams<{ id: string }>();
  const [contactShown, setContactShown] = useState(false);
  
  const worker = workers.find(w => w.id === id);
  
  if (!worker) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center flex-col p-6">
          <h2 className="text-2xl font-bold mb-3">कार्यकर्ता नहीं मिला</h2>
          <Link to="/" className="btn-primary">वापस जाएं</Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="flex items-center text-blue-600 mb-6">
            <ArrowLeft className="h-5 w-5 mr-1" />
            वापस जाएं
          </Link>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img 
                src={worker.image} 
                alt={worker.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-300 fill-yellow-300" />
                {worker.rating} रेटिंग
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{worker.name}</h1>
                  <p className="text-gray-600 mt-1">{worker.profession}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-full">
                    {worker.rate}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center mt-4 text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                {worker.location}
              </div>
              
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-2">विवरण</h2>
                <p className="text-gray-700">{worker.description}</p>
              </div>
              
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-3">उपलब्धता</h2>
                <div className="flex flex-wrap gap-2">
                  {["सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"].map(day => (
                    <div key={day} className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      <Check className="h-4 w-4 mr-1" />
                      {day}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-3">कार्य चित्र</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                      <Camera className="h-6 w-6 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                {contactShown ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">संपर्क विवरण</h3>
                    <div className="flex items-center text-green-700">
                      <Phone className="h-5 w-5 mr-2" />
                      <a href={`tel:${worker.phone}`} className="text-lg font-medium">{worker.phone}</a>
                    </div>
                    <p className="mt-2 text-sm text-green-600">
                      कृपया बताएं कि आपने WorkerBook से संपर्क किया है
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button 
                      onClick={() => setContactShown(true)}
                      className="btn-primary flex-1 flex items-center justify-center"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      संपर्क विवरण दिखाएं
                    </button>
                    <button className="btn-secondary flex-1 flex items-center justify-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      मिलने का समय बुक करें
                    </button>
                  </div>
                )}
              </div>
            </div>
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
 
