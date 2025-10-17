import Image from 'next/image';

export default function Dining() {
  return (
    <section id="dining" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Dining & Bar</h2>
          <div className="inline-block w-20 h-1 bg-red-600"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <Image 
              src="/restraunt/1.jpg" 
              alt="Restaurant" 
              width={300}
              height={200}
              className="rounded-lg shadow-lg object-cover w-full h-48"
            />
            <Image 
              src="/restraunt/bar.jpg" 
              alt="Bar" 
              width={300}
              height={200}
              className="rounded-lg shadow-lg object-cover w-full h-48"
            />
            <Image 
              src="/menu/breakfast.jpg" 
              alt="Breakfast" 
              width={300}
              height={200}
              className="rounded-lg shadow-lg object-cover w-full h-48"
            />
            <Image 
              src="/menu/reservation.jpg" 
              alt="Reservation" 
              width={300}
              height={200}
              className="rounded-lg shadow-lg object-cover w-full h-48"
            />
          </div>
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">A Culinary Journey</h3>
            <p className="mb-4">
              Indulge your senses at our restaurant and bar, where our expert chefs and mixologists create unforgettable culinary experiences. From gourmet dishes to handcrafted cocktails, every detail is crafted to perfection.
            </p>
            <p>
              We offer a diverse menu that caters to all tastes, ensuring a delightful experience for every guest. Join us for a memorable meal in a sophisticated and welcoming atmosphere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
