import { MapPin, Clock, Phone } from 'lucide-react';

const VisitUs = () => {
  return (
    <section id="visit-us" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Visit Us</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-primary">Address</h3>
                <p className="text-lg text-foreground/80">Bole Road, Addis Ababa, Ethiopia</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-primary">Opening Hours</h3>
                <p className="text-lg text-foreground/80">Monday - Saturday: 7:00 AM - 9:00 PM</p>
                <p className="text-lg text-foreground/80">Sunday: Closed</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-primary">Contact</h3>
                <p className="text-lg text-foreground/80">+251 911 234 567</p>
              </div>
            </div>
          </div>
          <div className="h-96 w-full bg-muted rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Map Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
