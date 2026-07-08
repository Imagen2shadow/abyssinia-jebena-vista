import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-accent/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Get in Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Have a question or just want to say hello? Drop us a message.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your Email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your Message" rows={6} required />
            </div>
            <div className="text-center">
              <Button type="submit" size="lg">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
