import  { Phone, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Worker } from '../types';

interface WorkerCardProps {
  worker: Worker;
}

export default function WorkerCard({ worker }: WorkerCardProps) {
  return (
    <div className="worker-card bg-white overflow-hidden">
      <div className="relative h-48">
        <img 
          src={worker.image} 
          alt={worker.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-xs flex items-center">
          <Star className="h-3 w-3 mr-1 text-yellow-300 fill-yellow-300" />
          {worker.rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{worker.name}</h3>
        <p className="text-gray-600">{worker.profession}</p>
        <div className="flex items-center mt-2 text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          {worker.location}
        </div>
        <div className="mt-2 font-medium text-blue-600">{worker.rate}</div>
        <div className="mt-4 flex items-center justify-between">
          <Link 
            to={`/worker/${worker.id}`}
            className="btn-primary text-sm"
          >
            देखें और संपर्क करें
          </Link>
          <a 
            href={`tel:${worker.phone}`} 
            className="flex items-center text-green-600"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
 
