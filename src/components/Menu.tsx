import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const menuItems = [
  {
    name: 'Espresso',
    description: 'A concentrated coffee beverage brewed by forcing hot water under pressure through finely-ground coffee beans.',
    price: '100 ETB',
  },
  {
    name: 'Macchiato',
    description: 'An espresso coffee drink with a small amount of milk, usually foamed. In Italian, macchiato means "stained" or "spotted".',
    price: '120 ETB',
  },
  {
    name: 'Pour-Over',
    description: 'A method of brewing coffee that involves pouring hot water over coffee grounds in a filter. This allows for a more nuanced and clean cup.',
    price: '150 ETB',
  },
  {
    name: 'Traditional Jebena Coffee',
    description: 'Experience the authentic Ethiopian coffee ceremony. Slow-brewed in a traditional clay pot (Jebena) and served in small cups.',
    price: '250 ETB',
  },
  {
    name: 'Spiced Tea',
    description: 'A fragrant and warming blend of black tea and traditional Ethiopian spices like cinnamon, cardamom, and cloves.',
    price: '80 ETB',
  },
  {
    name: 'Fresh Pastries',
    description: 'A selection of daily baked pastries, including croissants, and local Ethiopian bread like Himasha.',
    price: '90 ETB',
  },
];

const Menu = () => {
  return (
    <section id="menu" className="py-20 lg:py-32 bg-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Our Menu</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            A selection of our finest coffees, teas, and pastries, prepared with love and tradition.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.name} className="bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-primary">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{item.description}</p>
                <p className="font-bold text-lg text-accent-foreground">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
