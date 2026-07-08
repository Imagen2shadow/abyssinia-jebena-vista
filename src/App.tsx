import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import VisitUs from './components/VisitUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <WhyChooseUs />
        <Gallery />
        <VisitUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
