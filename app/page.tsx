import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Dining from './components/Dining';
import Conference from './components/Conference';
import Garden from './components/Garden';
import Rooms from './components/Rooms';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Dining />
      <Conference />
      <Garden />
      <Rooms />
      <Contact />
      <ScrollToTop />
      <ChatWidget />
    </div>
  );
}
