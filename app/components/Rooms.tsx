import Image from 'next/image';
import Link from 'next/link';

const standardRooms = [
  'IMG-20251008-WA0010.jpg',
  'IMG-20251008-WA0011.jpg',
  'IMG-20251008-WA0012.jpg',
  'IMG-20251008-WA0013.jpg',
  'IMG-20251008-WA0014.jpg',
  'IMG-20251008-WA0015.jpg',
  'IMG-20251008-WA0016.jpg',
];

const deluxeRooms = [
  'IMG-20251008-WA0017.jpg',
  'IMG-20251008-WA0018.jpg',
  'IMG-20251008-WA0019.jpg',
  'IMG-20251008-WA0020.jpg',
  'IMG-20251008-WA0021.jpg',
  'IMG-20251008-WA0022.jpg',
  'IMG-20251008-WA0023.jpg',
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Rooms & Suites</h2>
          <div className="inline-block w-20 h-1 bg-red-600 mb-6"></div>
          <Link 
            href="/gallery"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-sm transition duration-300 transform hover:scale-105"
          >
            <i className="fas fa-images mr-2"></i>
            View Full Gallery
          </Link>
        </div>
        
        {/* Standard Rooms Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Standard Rooms</h3>
            <div className="text-3xl font-bold text-red-600 mb-4">$70 <span className="text-sm text-gray-600 font-normal">per night</span></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comfortable and well-appointed rooms perfect for business travelers and short stays. 
              Each room features modern amenities and a cozy atmosphere.
            </p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {standardRooms.map((image, index) => (
              <div key={index} className="break-inside-avoid mb-4">
                <Image 
                  src={`/rooms/${image}`}
                  alt={`Standard Room ${index + 1}`}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Deluxe Rooms Section */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Deluxe Rooms</h3>
            <div className="text-3xl font-bold text-red-600 mb-4">$90 <span className="text-sm text-gray-600 font-normal">per night</span></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Spacious and elegantly designed rooms with premium amenities. 
              Perfect for leisure travelers seeking comfort and luxury.
            </p>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {deluxeRooms.map((image, index) => (
              <div key={index} className="break-inside-avoid mb-4">
                <Image 
                  src={`/rooms/${image}`}
                  alt={`Deluxe Room ${index + 1}`}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
