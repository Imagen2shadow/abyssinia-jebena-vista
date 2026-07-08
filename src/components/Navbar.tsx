import { useState } from 'react';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/90 backdrop-blur-md sticky top-0 z-50 border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="text-2xl font-serif font-bold text-primary">Abyssinia Brew</span>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="font-medium text-foreground/70 hover:text-primary transition-colors">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild>
              <a href="#visit-us">Visit Us</a>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-foreground/70 hover:text-primary focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium text-foreground/70 hover:bg-accent/50 hover:text-accent-foreground">
                {link.name}
              </a>
            ))}
            <div className='px-3 pt-2'>
              <Button asChild className='w-full'>
                <a href="#visit-us">Visit Us</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
