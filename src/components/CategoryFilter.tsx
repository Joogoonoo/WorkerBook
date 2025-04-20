import  { useState } from 'react';
import { Filter } from 'lucide-react';

const categories = [
  "सभी",
  "घर बनाने वाला मिस्त्री",
  "कारपेंटर",
  "पेंटर",
  "इलेक्ट्रिशियन",
  "प्लंबर",
  "टाइल्स लगाने वाला मिस्त्री",
  "सीलिंग बनाने वाला मिस्त्री",
  "मजदूर",
  "ड्राइवर",
  "घरेलू नौकर",
  "घर में खाना बनाने वाला कुक",
  "बाग की देखभाल करने वाला"
];

interface CategoryFilterProps {
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ onSelectCategory }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("सभी");
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    onSelectCategory(category === "सभी" ? "" : category);
  };
  
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="flex items-center mb-3">
        <Filter className="h-5 w-5 mr-2 text-blue-600" />
        <h3 className="font-medium text-gray-800">श्रेणी द्वारा फ़िल्टर करें</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
 
