import Image from 'next/image';

const roomImages = [
  'IMG-20251008-WA0023.jpg',
  'IMG-20251008-WA0020.jpg',
  'IMG-20251008-WA0010.jpg',
  'IMG-20251008-WA0011.jpg',
  'IMG-20251008-WA0012.jpg',
  'IMG-20251008-WA0013.jpg',
  'IMG-20251008-WA0014.jpg',
  'IMG-20251008-WA0015.jpg',
  'IMG-20251008-WA0016.jpg',
  'IMG-20251008-WA0017.jpg',
  'IMG-20251008-WA0018.jpg',
  'IMG-20251008-WA0019.jpg',
  'IMG-20251008-WA0021.jpg',
  'IMG-20251008-WA0022.jpg',
];

export default function Rooms() {
  return (
    <section id="rooms" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Rooms & Suites</h2>
          <div className="inline-block w-20 h-1 bg-red-600"></div>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {roomImages.map((image, index) => (
            <div key={index} className="break-inside-avoid mb-4">
              <Image 
                src={`/rooms/${image}`}
                alt={`Room Image ${index + 1}`}
                width={300}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
