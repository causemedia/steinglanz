import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,194,160,0.3)]">
              <defs>
                <linearGradient id="logoFace1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00C2A0" />
                  <stop offset="100%" stopColor="#00967A" />
                </linearGradient>
                <linearGradient id="logoFace2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00E0BA" />
                  <stop offset="100%" stopColor="#00C2A0" />
                </linearGradient>
              </defs>
              {/* Base Shape */}
              <path d="M20 36L4 27V13L20 4L36 13V27L20 36Z" fill="#2C2C2C" stroke="#00C2A0" strokeWidth="1.5" strokeLinejoin="round" />
              {/* Top Face (Light) */}
              <path d="M20 4L36 13L20 22L4 13L20 4Z" fill="url(#logoFace2)" opacity="0.9" />
              {/* Right Face (Brand) */}
              <path d="M20 22L36 13V27L20 36V22Z" fill="url(#logoFace1)" opacity="0.8" />
              {/* Left Face (Dark) */}
              <path d="M20 22L4 13V27L20 36V22Z" fill="#1a1a1a" opacity="0.6" />
              {/* Sparkle */}
              <path d="M28 8L29.5 5L31 8L34 9.5L31 11L29.5 14L28 11L25 9.5L28 8Z" fill="white" className="animate-pulse origin-center" />
            </svg>
          </div>
          <span className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-brand transition-colors duration-300">
            Stein<span className="text-brand group-hover:text-white transition-colors duration-300">Glanz</span>
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