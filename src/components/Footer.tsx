import { Input } from './ui/input';
import { Button } from './ui/button';
import { Send, Coffee } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
             <a href="#" className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-primary-foreground" />
              <span className="text-2xl font-serif font-bold">Abyssinia Brew</span>
            </a>
            <p className='text-primary-foreground/80'>The origin of coffee, served with tradition.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-primary-foreground/80 mb-4">Sign up for our newsletter to get the latest news and offers.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Your Email" className='bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60'/>
              <Button type="submit" variant='secondary'>Subscribe</Button>
            </form>
          </div>
          <div className='text-center md:text-right'>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-white"><FaInstagram size={24} /></a>
              <a href="#" className="text-primary-foreground/80 hover:text-white"><FaFacebook size={24} /></a>
              <a href="#" className="text-primary-foreground/80 hover:text-white"><FaTelegram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Abyssinia Brew. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
