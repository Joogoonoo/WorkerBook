import  { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import WorkerCard from '../components/WorkerCard';
import CategoryFilter from '../components/CategoryFilter';
import { workers } from '../data';
import { Plus, Upload, MapPin, Users, Facebook, Instagram, Twitter, Building } from 'lucide-react';

export default function Home() {
  const [filteredCategory, setFilteredCategory] = useState("");
  
  const filteredWorkers = filteredCategory 
    ? workers.filter(worker => worker.profession === filteredCategory)
    : workers;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-blue-600 text-white p-6 rounded-xl mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              WorkerBook पर आपका स्वागत है
            </h1>
            <p className="text-blue-100 mb-4">
              दुनिया भर के कुशल श्रमिकों से जुड़ें। अपने आसपास के सर्वश्रेष्ठ कारीगरों को खोजें।
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/add" className="btn-secondary bg-white text-blue-600 hover:bg-blue-50 flex items-center">
                <Plus className="mr-1 h-5 w-5" />
                कार्यकर्ता जोड़ें
              </Link>
              <Link to="/contractors" className="btn-secondary bg-blue-500 text-white hover:bg-blue-400 flex items-center">
                <Building className="mr-1 h-5 w-5" />
                ठेकेदार देखें
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <CategoryFilter onSelectCategory={setFilteredCategory} />
              
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-medium text-gray-800 mb-3">क्षेत्र द्वारा खोजें</h3>
                <div className="space-y-2">
                  {["दिल्ली", "मुंबई", "बैंगलोर", "हैदराबाद", "जयपुर", "अहमदाबाद", "पुणे", "लखनऊ", "चेन्नई"].map(location => (
                    <button 
                      key={location}
                      className="flex items-center text-gray-600 hover:text-blue-600 w-full text-left"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      {location}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWorkers.map(worker => (
                  <WorkerCard key={worker.id} worker={worker} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-2" />
                <span className="text-lg font-bold">WorkerBook</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">
                दुनिया भर के श्रमिकों को जोड़ने का मंच
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <h4 className="font-medium mb-2">हमसे जुड़ें</h4>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 cursor-pointer hover:text-blue-400" />
                <Twitter className="h-5 w-5 cursor-pointer hover:text-blue-400" />
                <Instagram className="h-5 w-5 cursor-pointer hover:text-blue-400" />
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} WorkerBook. सर्वाधिकार सुरक्षित।
          </div>
        </div>
      </footer>
    </div>
  );
}
 
