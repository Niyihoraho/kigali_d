import Image from 'next/image';

export default function Garden() {
  return (
    <section id="garden" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Garden Oasis</h2>
          <div className="inline-block w-20 h-1 bg-red-600"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">A Tranquil Retreat</h3>
            <p className="mb-4">
              Escape the hustle and bustle of the city in our serene garden oasis. Our beautifully landscaped gardens provide a peaceful and relaxing environment for our guests to unwind and reconnect with nature.
            </p>
            <p>
              Perfect for a morning stroll, an afternoon read, or an evening cocktail, our garden is a true hidden gem.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Image 
              src="/garden/WhatsApp Image 2025-10-08 at 13.29.46_dc473b04.jpg" 
              alt="Garden" 
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
