import React from 'react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { RevealOnScroll } from './RevealOnScroll';
import Button from './Button';
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-anthracite via-anthracite to-transparent z-10"></div>
        <img 
          src="https://image2url.com/r2/default/files/1770147593821-71d01d84-1bc5-461b-9af4-4ed7f5b782ee.png" 
          alt="Stein Textur" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
              <span className="text-brand text-xs font-bold uppercase tracking-widest">Premium Steinreinigung</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight">
              Wir lassen Steine <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyan-400">wieder strahlen.</span>
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0">
              High-End Aufbereitung für Einfahrten, Terrassen und Fassaden. 
              Entfernung von Algen, Flechten und Schmutz – <span className="text-white font-semibold">tiefenwirksam & langlebig.</span>
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={400} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
              Kostenloses Angebot
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth'})}>
              Unsere Arbeiten
            </Button>
          </RevealOnScroll>

          <RevealOnScroll delay={600} className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
            {[
              { icon: ShieldCheck, text: "Nachhaltiger Schutz" },
              { icon: Zap, text: "Sofortiger Effekt" },
              { icon: CheckCircle2, text: "100% Zufriedenheit" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start gap-2 group">
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-brand/20 transition-colors">
                  <item.icon className="text-brand h-6 w-6" />
                </div>
                <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">{item.text}</span>
              </div>
            ))}
          </RevealOnScroll>
        </div>

        {/* Visual Content - Before/After Slider */}
        <RevealOnScroll delay={300} direction="left" className="h-[400px] md:h-[500px] lg:h-[600px] w-full">
           <BeforeAfterSlider 
              beforeImage="https://image2url.com/r2/default/files/1770146975187-406f3d5e-28fb-467b-94fc-3bd8097093e6.png"
              afterImage="https://image2url.com/r2/default/files/1770146999047-e1e97147-0898-4304-adc7-6dfa1df015d0.png"
              alt="Terrassenreinigung"
           />
           {/* Floating Badge */}
           <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl hidden md:block animate-float">
              <div className="flex items-center gap-4">
                 <div className="text-4xl font-bold text-anthracite">15+</div>
                 <div className="text-sm text-gray-600 font-medium leading-tight">Jahre<br/>Erfahrung</div>
              </div>
           </div>
        </RevealOnScroll>

      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-brand rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;