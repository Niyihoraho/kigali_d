import Header from './components/Header';
import Hero from './components/Hero';
import Booking from './components/Booking';
import About from './components/About';
import Dining from './components/Dining';
import Conference from './components/Conference';
import Garden from './components/Garden';
import Rooms from './components/Rooms';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Booking />
      <About />
      <Dining />
      <Conference />
      <Garden />
      <Rooms />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
