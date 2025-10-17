import Image from 'next/image';

export default function Conference() {
  return (
    <section id="conference" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Conference & Events</h2>
          <div className="inline-block w-20 h-1 bg-red-600"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-gray-700">
            <h3 className="text-2xl font-bold mb-4">Host Your Perfect Event</h3>
            <p className="mb-4">
              Our hotel offers state-of-the-art conference rooms and event spaces, perfect for business meetings, weddings, and social gatherings. With our professional event planning team, we ensure every detail is taken care of, so you can focus on what matters.
            </p>
            <p>
              Our flexible spaces can be customized to meet your needs, and our catering services provide a wide range of options to suit any occasion.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image 
              src="/conference/1.jpg" 
              alt="Conference Room" 
              width={300}
              height={200}
              className="rounded-lg shadow-lg object-cover w-full h-48"
            />
            <Image 
              src="/conference/2.jpg" 
              alt="Event Setup" 
              width={300}
              height={200}
              className="rounded-lg shadow-lg object-cover w-full h-48"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
