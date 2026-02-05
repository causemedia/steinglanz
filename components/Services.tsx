import React, { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { Hammer, Eraser, Droplet, Home, ArrowRight, X } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 'paving',
      title: 'Pflasterreinigung',
      description: 'Entfernung von Flechten, Moos und Grauschleier. Inklusive Neuverfugung mit festem Fugensand.',
      price: 'ab 12€ / m²',
      icon: Hammer,
      image: 'https://images.unsplash.com/photo-1596668744033-936c5333f20b?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'terrace',
      title: 'Terrassenaufbereitung',
      description: 'Schonende Reinigung von Naturstein und Holz. Versiegelung für langanhaltenden Schutz.',
      price: 'ab 15€ / m²',
      icon: Home,
      image: 'https://images.unsplash.com/photo-1533230588667-876356c9d724?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'facade',
      title: 'Fassadenreinigung',
      description: 'Algenentfernung ohne Hochdruckschäden. Spezieller Schutzfilm gegen Neubefall.',
      price: 'ab 9€ / m²',
      icon: Droplet,
      image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'graffiti',
      title: 'Sonderservices',
      description: 'Graffiti-Entfernung, Kaugummibeseitigung und Ölspur-Entfernung.',
      price: 'Auf Anfrage',
      icon: Eraser,
      image: 'https://images.unsplash.com/photo-1582286786358-8686d17b5f25?q=80&w=1000&auto=format&fit=crop'
    },
  ];

  return (
    <section id="services" className="py-24 bg-anthracite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-16">
          <h2 className="text-brand font-bold tracking-widest uppercase text-sm mb-2">Unsere Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white">Glanzleistung für jeden Stein.</h3>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <RevealOnScroll key={service.id} delay={idx * 100} className="h-full">
              <div 
                className="group relative h-full bg-anthracite-dark rounded-2xl border border-white/5 overflow-hidden hover:shadow-[0_0_30px_rgba(0,194,160,0.2)] transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Image Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale" />
                </div>
                
                <div className="p-8 relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand group-hover:rotate-6 transition-all duration-300">
                    <service.icon className="text-brand group-hover:text-white h-7 w-7" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">{service.title}</h4>
                  <p className="text-gray-400 text-sm mb-6 flex-grow">{service.description}</p>
                  
                  <div className="pt-6 border-t border-white/10 flex justify-between items-center mt-auto">
                    <span className="text-brand font-mono text-sm">{service.price}</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-anthracite transition-all">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Modal for Details */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelectedService(null)}></div>
          <div className="relative w-full max-w-2xl bg-anthracite border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-slide-up">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white hover:bg-brand hover:text-anthracite transition-colors"
            >
              <X size={20} />
            </button>
            <div className="h-64 w-full relative">
              <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-3xl font-display font-bold text-white">{selectedService.title}</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Unsere {selectedService.title} bietet Ihnen höchste Qualität. {selectedService.description} 
                Wir verwenden ausschließlich modernste Technik, um die Substanz Ihres Steins zu schützen und gleichzeitig tiefsitzende Verschmutzungen zu lösen.
              </p>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <span className="text-gray-400">Richtpreis</span>
                <span className="text-2xl font-bold text-brand">{selectedService.price}</span>
              </div>
              <button 
                className="w-full mt-6 bg-brand text-anthracite font-bold py-4 rounded-lg hover:bg-white transition-colors"
                onClick={() => { setSelectedService(null); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'}); }}
              >
                Jetzt für {selectedService.title} anfragen
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;