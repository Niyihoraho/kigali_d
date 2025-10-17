import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-3">
                WELCOME TO DIPLOMATE HOTEL
              </h2>
              <div className="w-20 h-1 bg-red-600"></div>
            </div>
            <p className="text-gray-600 mb-4">
              Welcome to Diplomate Hotel, where luxury meets comfort. Our hotel offers a unique blend of modern amenities and classic elegance, ensuring a memorable stay for every guest.
            </p>
            <p className="text-gray-600">
              Whether you&apos;re here for business or leisure, our dedicated team is here to provide you with an exceptional experience.
            </p>
          </div>
          <div>
            <Image 
              src="/reception/1.jpg" 
              alt="Hotel Reception" 
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
