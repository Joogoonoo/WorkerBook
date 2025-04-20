export  interface Contractor {
  id: string;
  name: string;
  location: string;
  rate: string;
  phone: string;
  image: string;
  projectImages: string[];
  rating: number;
  experience: string;
  specialization: string;
  description: string;
  projectsCompleted: number;
  teamSize: number;
}

export const contractors: Contractor[] = [
  {
    id: '1',
    name: 'रमेश अग्रवाल',
    location: 'दिल्ली',
    rate: '₹250/वर्ग फीट',
    phone: '+91 9876543210',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb25zdHJ1Y3Rpb24lMjBjb250cmFjdG9yJTIwc3VwZXJ2aXNvcnxlbnwwfHx8fDE3NDQ4MTg4MDN8MA&ixlib=rb-4.0.3',
    projectImages: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjb25zdHJ1Y3Rpb24lMjBjb250cmFjdG9yJTIwc3VwZXJ2aXNvcnxlbnwwfHx8fDE3NDQ4MTg4MDN8MA&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBjb25zdHJ1Y3Rpb24lMjBjb250cmFjdG9yJTIwc3VwZXJ2aXNvcnxlbnwwfHx8fDE3NDQ4MTg4MDN8MA&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBjb25zdHJ1Y3Rpb24lMjBjb250cmFjdG9yJTIwc3VwZXJ2aXNvcnxlbnwwfHx8fDE3NDQ4MTg4MDN8MA&ixlib=rb-4.0.3',
    ],
    rating: 4.8,
    experience: '15 वर्ष',
    specialization: 'आवासीय निर्माण',
    description: 'मैं 15 वर्षों से निर्माण क्षेत्र में काम कर रहा हूँ। मेरी टीम आवासीय और वाणिज्यिक भवनों का निर्माण उच्च गुणवत्ता के साथ करती है। हमारे पास आधुनिक उपकरण और अनुभवी कर्मचारी हैं।',
    projectsCompleted: 45,
    teamSize: 25
  },
  {
    id: '2',
    name: 'सुरेश पाटिल',
    location: 'मुंबई',
    rate: '₹280/वर्ग फीट',
    phone: '+91 9876543211',
    image: 'https://images.unsplash.com/photo-1489514354504-1653aa90e34e?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBjb25zdHJ1Y3Rpb24lMjBjb250cmFjdG9yJTIwc3VwZXJ2aXNvcnxlbnwwfHx8fDE3NDQ4MTg4MDN8MA&ixlib=rb-4.0.3',
    projectImages: [
      'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw1fHxpbmRpYW4lMjBjb25zdHJ1Y3Rpb24lMjBjb250cmFjdG9yJTIwc3VwZXJ2aXNvcnxlbnwwfHx8fDE3NDQ4MTg4MDN8MA&ixlib=rb-4.0.3',
      'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBjb25zdHJ1Y3Rpb24lMjBjb250cmFjdG9yJTIwc3VwZXJ2aXNvcnxlbnwwfHx8fDE3NDQ4MTg4MDN8MA&ixlib=rb-4.0.3',
    ],
    rating: 4.6,
    experience: '12 वर्ष',
    specialization: 'वाणिज्यिक निर्माण',
    description: 'मुंबई क्षेत्र में 12 वर्षों से वाणिज्यिक भवनों का निर्माण कर रहा हूँ। हमारी टीम समय पर और बजट के अनुसार प्रोजेक्ट को पूरा करने में माहिर है।',
    projectsCompleted: 32,
    teamSize: 18
  },
  {
    id: '3',
    name: 'प्रकाश यादव',
    location: 'जयपुर',
    rate: '₹220/वर्ग फीट',
    phone: '+91 9876543212',
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBjb25zdHJ1Y3Rpb24lMjBjb250cmFjdG9yJTIwc3VwZXJ2aXNvcnxlbnwwfHx8fDE3NDQ4MTg4MDN8MA&ixlib=rb-4.0.3',
    projectImages: [
      'https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBjb25zdHJ1Y3Rpb24lMjBjb250cmFjdG9yJTIwc3VwZXJ2aXNvcnxlbnwwfHx8fDE3NDQ4MTg4MDN8MA&ixlib=rb-4.0.3',
    ],
    rating: 4.5,
    experience: '8 वर्ष',
    specialization: 'राजस्थानी आर्किटेक्चर',
    description: 'राजस्थानी आर्किटेक्चर में विशेषज्ञता के साथ, मैं पारंपरिक डिजाइन और आधुनिक तकनीकों का उपयोग करता हूँ। हमारी टीम स्थानीय सामग्री का उपयोग करके सुंदर और टिकाऊ घर बनाती है।',
    projectsCompleted: 22,
    teamSize: 15
  }
];
 
