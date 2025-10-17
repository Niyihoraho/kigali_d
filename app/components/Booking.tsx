'use client';

import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    roomType: 'Deluxe Room',
    guests: 2
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
    console.log('Booking submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value
    }));
  };

  return (
    <section id="booking" className="-mt-16 relative z-20">
      <div className="container mx-auto px-6">
        <form 
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
        >
          <div>
            <label htmlFor="check-in" className="block text-sm font-medium text-gray-700">
              Check-in
            </label>
            <input 
              type="date" 
              id="check-in" 
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="check-out" className="block text-sm font-medium text-gray-700">
              Check-out
            </label>
            <input 
              type="date" 
              id="check-out" 
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="room-type" className="block text-sm font-medium text-gray-700">
              Room Type
            </label>
            <select 
              id="room-type" 
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              <option>Deluxe Room</option>
              <option>Executive Suite</option>
              <option>Presidential Suite</option>
            </select>
          </div>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
              Guests
            </label>
            <input 
              type="number" 
              id="guests" 
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
}
