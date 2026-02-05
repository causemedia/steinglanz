import React, { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import Button from './Button';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-anthracite overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <RevealOnScroll>
              <h2 className="text-brand font-bold tracking-widest uppercase text-sm mb-2">Kontakt</h2>
              <h3 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                Bereit für <br />neuen Glanz?
              </h3>
              <p className="text-gray-400 mt-6 text-lg">
                Senden Sie uns eine Anfrage oder rufen Sie uns an. Wir erstellen Ihnen gerne ein unverbindliches und kostenloses Angebot.
              </p>
            </RevealOnScroll>

            <div className="space-y-6">
              {[
                { icon: MapPin, text: "Mühlenstraße 12, 45657 Musterstadt", label: "Hauptsitz" },
                { icon: Phone, text: "0201 12345678", label: "Mo-Fr 08:00 - 18:00" },
                { icon: Mail, text: "kontakt@steinglanz.de", label: "Schnelle Antwort garantiert" },
              ].map((item, idx) => (
                <RevealOnScroll key={idx} delay={idx * 100} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wide mb-1">{item.label}</p>
                    <p className="text-white text-lg font-medium hover:text-brand transition-colors cursor-pointer">{item.text}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Form */}
          <RevealOnScroll direction="left" className="bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-slide-up">
                <div className="w-20 h-20 bg-brand/20 rounded-full flex items-center justify-center mb-6 text-brand">
                  <CheckCircle size={40} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Anfrage gesendet!</h4>
                <p className="text-gray-400">Vielen Dank für Ihr Interesse. Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                <Button className="mt-8" variant="outline" onClick={() => setFormState('idle')}>Neue Anfrage</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Name</label>
                    <input required type="text" className="w-full bg-anthracite border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="Max Mustermann" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Telefon</label>
                    <input required type="tel" className="w-full bg-anthracite border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="0123 456789" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">E-Mail</label>
                  <input required type="email" className="w-full bg-anthracite border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="ihre@email.de" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Nachricht</label>
                  <textarea required rows={4} className="w-full bg-anthracite border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none" placeholder="Ich interessiere mich für eine Terrassenreinigung..."></textarea>
                </div>
                
                <Button fullWidth disabled={formState === 'loading'}>
                  {formState === 'loading' ? 'Wird gesendet...' : 'Kostenloses Angebot anfordern'}
                  {!formState && <Send size={18} className="ml-2" />}
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Ihre Daten werden sicher verschlüsselt übertragen. Keine Weitergabe an Dritte.
                </p>
              </form>
            )}
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Contact;