import { Button } from './ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-[calc(100vh-80px)] min-h-[500px] flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/9219d365-6779-40ac-81ab-c56c10e55a84/abyssinia-hero-bg-282eb111-1783535899257.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Experience the Origin of Coffee
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90 drop-shadow-sm animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Authentic Ethiopian coffee, roasted and served with tradition in Addis Ababa
        </p>
        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" asChild variant='secondary'>
            <a href="#visit-us">Visit Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
