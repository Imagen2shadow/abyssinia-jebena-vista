import { Bean, Coffee, Home } from 'lucide-react';

const features = [
  {
    name: '100% Ethiopian Beans',
    description: 'We source our beans directly from the best coffee farms in Ethiopia, ensuring unparalleled quality and supporting local communities.',
    icon: <Bean className="h-10 w-10 text-accent" />,
  },
  {
    name: 'Traditional Jebena Brewing',
    description: 'Experience coffee brewed in a traditional Jebena, a method that brings out the rich, full-bodied flavors of Ethiopian coffee.',
    icon: <Coffee className="h-10 w-10 text-accent" />,
  },
  {
    name: 'Cozy Cultural Ambiance',
    description: 'Our café is designed to be a warm and welcoming space where you can relax, socialize, and immerse yourself in Ethiopian culture.',
    icon: <Home className="h-10 w-10 text-accent" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Why Choose Us?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {features.map((feature) => (
            <div key={feature.name}>
              <div className="flex justify-center mb-4 p-4 rounded-full bg-accent/10 w-20 h-20 mx-auto items-center transition-transform duration-300 hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary">{feature.name}</h3>
              <p className="mt-2 text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
