import  { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import { contractors } from '../data/contractors';
import { 
  ArrowLeft, Star, MapPin, PhoneCall, 
  Clock, CheckCircle, Users, Calendar, 
  Award, Building, Image 
} from 'lucide-react';

export default function ContractorDetail() {
  const { id } = useParams<{ id: string }>();
  const [showContact, setShowContact] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const contractor = contractors.find(c => c.id === id);
  
  if (!contractor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">ठेकेदार नहीं मिला</h2>
            <Link to="/contractors" className="btn-primary">
              सभी ठेकेदार देखें
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button 
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <CloseIcon className="h-6 w-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="प्रोजेक्ट इमेज" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
      
      <main className="flex-grow py-6">
        <div className="max-w-5xl mx-auto px-4">
          <Link to="/contractors" className="flex items-center text-blue-600 mb-6">
            <ArrowLeft className="h-5 w-5 mr-1" />
            सभी ठेकेदार देखें
          </Link>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="relative h-80">
              <img 
                src={contractor.image} 
                alt={contractor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h1 className="text-3xl font-bold text-white">{contractor.name}</h1>
                <div className="flex items-center text-white/90 mt-2">
                  <MapPin className="h-5 w-5 mr-1" />
                  {contractor.location}
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm flex items-center">
                <Star className="h-4 w-4 mr-1 text-yellow-300 fill-yellow-300" />
                {contractor.rating} रेटिंग
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center flex-1 min-w-[200px]">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-600">विशेषज्ञता</h3>
                    <p className="font-semibold">{contractor.specialization}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center flex-1 min-w-[200px]">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-600">अनुभव</h3>
                    <p className="font-semibold">{contractor.experience}</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center flex-1 min-w-[200px]">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-600">पूरे किए गए प्रोजेक्ट</h3>
                    <p className="font-semibold">{contractor.projectsCompleted}+</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center flex-1 min-w-[200px]">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-600">टीम का आकार</h3>
                    <p className="font-semibold">{contractor.teamSize} सदस्य</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">दर और शुल्क</h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Award className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-green-700">{contractor.rate}</p>
                      <p className="text-sm text-gray-600">औसत निर्माण दर</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-700">
                    * दरें अलग-अलग प्रोजेक्ट के अनुसार भिन्न हो सकती हैं। सटीक अनुमान के लिए संपर्क करें।
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">परिचय</h2>
                <p className="text-gray-700 leading-relaxed">{contractor.description}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">प्रोजेक्ट गैलरी</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {contractor.projectImages.map((img, index) => (
                    <div 
                      key={index} 
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img 
                        src={img} 
                        alt={`प्रोजेक्ट ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                        <Image className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                {showContact ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">संपर्क विवरण</h3>
                    <div className="flex items-center text-xl font-bold text-green-700">
                      <PhoneCall className="h-5 w-5 mr-2" />
                      <a href={`tel:${contractor.phone}`}>{contractor.phone}</a>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      कृपया बताएं कि आपने WorkerBook से संपर्क किया है
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setShowContact(true)}
                      className="btn-primary flex-1 flex items-center justify-center"
                    >
                      <PhoneCall className="h-5 w-5 mr-2" />
                      संपर्क विवरण दिखाएं
                    </button>
                    <button className="btn-secondary flex-1 flex items-center justify-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      साइट विजिट शेड्यूल करें
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
 
