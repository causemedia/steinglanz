import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { Award, HeartHandshake, Leaf, Users } from 'lucide-react';

const About: React.FC = () => {
  const milestones = [
    { year: "2010", title: "Gründung", desc: "Start in einer kleinen Garage mit einem Hochdruckreiniger." },
    { year: "2015", title: "Expansion", desc: "Erweiterung auf Fassadenreinigung und Spezialversiegelung." },
    { year: "2020", title: "Technologie", desc: "Einführung von chemiefreien Heißwasser-Verfahren." },
    { year: "2024", title: "Marktführer", desc: "Über 5.000 zufriedene Kunden in der Region." },
  ];

  return (
    <section id="about" className="py-24 bg-anthracite-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll className="text-center mb-20">
          <h2 className="text-brand font-bold tracking-widest uppercase text-sm mb-2">Unsere Geschichte</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Mehr als nur Reinigung.</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Seit über einem Jahrzehnt setzen wir Standards in der Oberflächentechnik. Unser Antrieb? Perfektion. Unser Versprechen? Langlebigkeit.
          </p>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Leaf, title: "Umweltschonend", text: "Verzicht auf aggressive Chemie durch innovative Heißwassertechnik." },
              { icon: Award, title: "Meisterqualität", text: "Zertifizierte Fachkräfte und ständige Weiterbildung." },
              { icon: HeartHandshake, title: "Fair & Transparent", text: "Festpreisgarantie ohne versteckte Kosten." },
              { icon: Users, title: "Kundenfokus", text: "Wir sind erst zufrieden, wenn Ihr Stein wie neu aussieht." },
            ].map((val, idx) => (
              <RevealOnScroll key={idx} delay={idx * 100} className="p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-brand/50 transition-all hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-anthracite rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand transition-colors">
                  <val.icon className="text-brand group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{val.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{val.text}</p>
              </RevealOnScroll>
            ))}
          </div>

          {/* Animated Timeline */}
          <div className="relative pl-8 border-l border-white/10 space-y-12">
            {milestones.map((m, idx) => (
              <RevealOnScroll key={idx} delay={idx * 150} direction="right" className="relative group">
                <span className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-anthracite border-4 border-brand group-hover:scale-125 transition-transform"></span>
                <div className="flex flex-col">
                  <span className="text-4xl font-display font-bold text-white/10 absolute -top-4 -left-6 z-0 group-hover:text-white/20 transition-colors select-none">{m.year}</span>
                  <div className="relative z-10 pl-4">
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-brand transition-colors">{m.title}</h4>
                    <p className="text-gray-400">{m.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;