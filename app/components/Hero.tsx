export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 leading-tight">
          WELCOME TO KIGALI DIPLOMATE HOTEL
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light">
          THE PLACE WHERE YOU LOOKING TO
        </p>
        <a 
          href="#booking" 
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-sm transition duration-300 transform hover:scale-105"
        >
          EXPLORE NOW
        </a>
      </div>
    </section>
  );
}
