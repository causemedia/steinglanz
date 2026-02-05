import React, { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Über uns', href: '#about' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Projekte', href: '#projects' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-anthracite/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand to-cyan-600 flex items-center justify-center shadow-lg group-hover:shadow-brand/50 transition-all duration-300">
            <Droplets className="text-white h-6 w-6" />
          </div>
          <span className="text-2xl font-display font-bold text-white tracking-tight">
            Stein<span className="text-brand">Glanz</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-brand transition-colors uppercase tracking-wider relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-brand after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          <Button size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
            Angebot anfordern
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-brand transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-anthracite-dark/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 transform md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-display font-bold text-white hover:text-brand transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView(); }}>
            Angebot anfordern
          </Button>
      </div>
    </nav>
  );
};

export default Navbar;