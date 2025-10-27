'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const allRoomImages = [
  { src: 'IMG-20251008-WA0010.jpg', category: 'Standard', title: 'Standard Room 1' },
  { src: 'IMG-20251008-WA0011.jpg', category: 'Standard', title: 'Standard Room 2' },
  { src: 'IMG-20251008-WA0012.jpg', category: 'Standard', title: 'Standard Room 3' },
  { src: 'IMG-20251008-WA0013.jpg', category: 'Standard', title: 'Standard Room 4' },
  { src: 'IMG-20251008-WA0014.jpg', category: 'Standard', title: 'Standard Room 5' },
  { src: 'IMG-20251008-WA0015.jpg', category: 'Standard', title: 'Standard Room 6' },
  { src: 'IMG-20251008-WA0016.jpg', category: 'Standard', title: 'Standard Room 7' },
  { src: 'IMG-20251008-WA0017.jpg', category: 'Deluxe', title: 'Deluxe Room 1' },
  { src: 'IMG-20251008-WA0018.jpg', category: 'Deluxe', title: 'Deluxe Room 2' },
  { src: 'IMG-20251008-WA0019.jpg', category: 'Deluxe', title: 'Deluxe Room 3' },
  { src: 'IMG-20251008-WA0020.jpg', category: 'Deluxe', title: 'Deluxe Room 4' },
  { src: 'IMG-20251008-WA0021.jpg', category: 'Deluxe', title: 'Deluxe Room 5' },
  { src: 'IMG-20251008-WA0022.jpg', category: 'Deluxe', title: 'Deluxe Room 6' },
  { src: 'IMG-20251008-WA0023.jpg', category: 'Deluxe', title: 'Deluxe Room 7' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ['All', 'Standard', 'Deluxe'];
  
  const filteredImages = selectedCategory === 'All' 
    ? allRoomImages 
    : allRoomImages.filter(img => img.category === selectedCategory);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center group">
              <Image 
                src="/logo/logo.png" 
                alt="KIGALI DIPLOMATE Hotel Logo" 
                width={48} 
                height={48}
                className="mr-3 transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  KIGALI DIPLOMATE
                </h1>
                <p className="text-xs text-gray-500 font-medium">
                  HOTEL
                </p>
              </div>
            </Link>
            <Link 
              href="/"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-sm transition duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Room Gallery</h2>
          <div className="inline-block w-24 h-1 bg-red-600 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful accommodations through our comprehensive photo gallery. 
            From comfortable standard rooms to luxurious deluxe suites, discover your perfect stay.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-sm p-2 flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md font-medium transition duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => openModal(image.src)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={`/rooms/${image.src}`}
                  alt={image.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <i className="fas fa-search-plus text-white text-2xl"></i>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-gray-300 text-sm">{image.category} Room</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Info */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Room Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Standard Rooms</h4>
                <div className="text-3xl font-bold text-red-600 mb-2">$70</div>
                <p className="text-gray-600 text-sm mb-4">per night</p>
                <p className="text-gray-600">
                  Comfortable and well-appointed rooms perfect for business travelers and short stays.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Deluxe Rooms</h4>
                <div className="text-3xl font-bold text-red-600 mb-2">$90</div>
                <p className="text-gray-600 text-sm mb-4">per night</p>
                <p className="text-gray-600">
                  Spacious and elegantly designed rooms with premium amenities for leisure travelers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-400 transition-colors z-10"
            >
              <i className="fas fa-times"></i>
            </button>
            <Image
              src={`/rooms/${selectedImage}`}
              alt="Room Image"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
