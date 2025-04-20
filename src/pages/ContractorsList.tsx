import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { contractors } from '../data/contractors';
import { Star, MapPin, PhoneCall, Building } from 'lucide-react';

export default function ContractorsList() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-blue-600 text-white p-6 rounded-xl mb-8">
            <div className="flex items-center mb-4">
              <Building className="h-8 w-8 mr-3" />
              <h1 className="text-2xl md:text-3xl font-bold">ठेकेदार खोजें</h1>
            </div>
            <p className="text-blue-100 mb-2">
              अपने निर्माण प्रोजेक्ट के लिए अनुभवी और विश्वसनीय ठेकेदार से संपर्क करें
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contractors.map(contractor => (
              <div key={contractor.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-56">
                  <img
                    src={contractor.image}
                    alt={contractor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-300 fill-yellow-300" />
                    {contractor.rating}
                  </div>
                </div>
                
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-1">{contractor.name}</h2>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{contractor.location}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {contractor.rate}
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                      {contractor.experience} अनुभव
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {contractor.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/contractor/${contractor.id}`}
                      className="btn-primary text-sm"
                    >
                      पूरा प्रोफाइल देखें
                    </Link>
                    
                    <button className="w-10 h-10 flex items-center justify-center bg-green-500 hover:bg-green-600 rounded-full">
                      <PhoneCall className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
 
