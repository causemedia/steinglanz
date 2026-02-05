import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Droplets } from 'lucide-react';

// List of all major images to preload to ensure smooth experience
const ASSETS_TO_PRELOAD = [
  // Hero Section
  'https://image2url.com/r2/default/files/1770147593821-71d01d84-1bc5-461b-9af4-4ed7f5b782ee.png', 
  'https://image2url.com/r2/default/files/1770146975187-406f3d5e-28fb-467b-94fc-3bd8097093e6.png', 
  'https://image2url.com/r2/default/files/1770146999047-e1e97147-0898-4304-adc7-6dfa1df015d0.png',
  
  // Projects - All High Res "After" Images
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop', // Villa
  'https://image2url.com/r2/default/files/1770148531787-625f832c-b9ab-474f-82ff-15e74c521ca6.png', // Schmidt
  'https://image2url.com/r2/default/files/1770148434161-1ccfed80-6b8c-49ec-89b2-73c683bb54df.png', // Markt
  'https://image2url.com/r2/default/files/1770148565420-8274e29a-17a2-4980-a454-9746fd4e9e1f.png', // Residenz
  'https://image2url.com/r2/default/files/1770148623986-cc5ef50e-f6a2-4c5c-bac3-60a9c60be79b.png', // Gewerbe
  'https://image2url.com/r2/default/files/1770148594010-5b5f5f0d-c6f4-4997-920c-9ec2600b0335.png', // Brunnen
  
  // Service Highlights
  'https://images.unsplash.com/photo-1596668744033-936c5333f20b?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1533230588667-876356c9d724?q=80&w=1000&auto=format&fit=crop',
];

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);

  useEffect(() => {
    let loadedCount = 0;
    const totalAssets = ASSETS_TO_PRELOAD.length;
    
    // Safety timeout in case an image hangs forever
    const safetyTimeout = setTimeout(() => {
      setExitAnimation(true);
      setTimeout(() => setLoading(false), 800);
    }, 10000);

    const updateProgress = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / totalAssets) * 100);
      setProgress(newProgress);

      if (loadedCount === totalAssets) {
        clearTimeout(safetyTimeout);
        // Add a small delay at 100% to let the user see completion
        setTimeout(() => {
          setExitAnimation(true);
          setTimeout(() => setLoading(false), 800); // Wait for fade-out animation
        }, 800);
      }
    };

    ASSETS_TO_PRELOAD.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress; // Proceed even if one fails
    });

    return () => clearTimeout(safetyTimeout);
  }, []);

  if (loading) {
    return (
      <div className={`fixed inset-0 bg-anthracite-dark z-[100] flex flex-col items-center justify-center overflow-hidden ${exitAnimation ? 'animate-fade-out' : ''}`}>
        
        {/* Background Particles (Bubbles) */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-brand/20 rounded-full animate-rise"
              style={{
                width: Math.random() * 20 + 5 + 'px',
                height: Math.random() * 20 + 5 + 'px',
                left: Math.random() * 100 + '%',
                animationDuration: Math.random() * 3 + 2 + 's',
                animationDelay: Math.random() * 2 + 's'
              }}
            ></div>
          ))}
        </div>

        {/* Central Logo Container */}
        <div className="relative z-10 p-10">
          <div className="relative mb-6 flex justify-center">
             {/* Droplet that fills up */}
             <div className="relative w-24 h-24">
                <Droplets size={96} className="text-anthracite stroke-2 absolute inset-0 z-20" />
                {/* The "Water" Fill */}
                <div 
                  className="absolute bottom-0 left-0 w-full bg-brand transition-all duration-300 ease-out"
                  style={{ 
                    height: `${progress}%`,
                    maskImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRyb3BsZXRzIj48cGF0aCBkPSJNNyAxNi4zYzMuNyAwIDYtMi44IDYtNS4yIDAtMS4yLTEuMS0yLjMtMi4xLTMuOC4xIDEuNCAxIDMuMSAxIDQuNyAwIDIuNC0yLjMgNS4yLTYgNS4yIi8+PHBhdGggZD0iTTEyIDEzLjNjMy43IDAgNi0yLjggNi01LjIgMC0xLjItMS4xLTIuMy0yLjEtMy44LjEgMS40IDEgMy4xIDEgNC43IDAgMi40LTIuMyA1LjItNiA1LjIiLz48L3N2Zz4=")',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskImage: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRyb3BsZXRzIj48cGF0aCBkPSJNNyAxNi4zYzMuNyAwIDYtMi44IDYtNS4yIDAtMS4yLTEuMS0yLjMtMi4xLTMuOC4xIDEuNCAxIDMuMSAxIDQuNyAwIDIuNC0yLjMgNS4yLTYgNS4yIi8+PHBhdGggZD0iTTEyIDEzLjNjMy43IDAgNi0yLjggNi01LjIgMC0xLjItMS4xLTIuMy0yLjEtMy44LjEgMS40IDEgMy4xIDEgNC43IDAgMi40LTIuMyA1LjItNiA1LjIiLz48L3N2Zz4=")',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center'
                  }} 
                />
             </div>
          </div>

          <div className="text-center relative">
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight mb-2 relative">
              <span className="text-white relative z-10">Stein</span>
              <span className="relative inline-block text-outline ml-1">
                 Glanz
                 {/* Shiny fill for 'Glanz' */}
                 <span 
                    className="absolute inset-0 text-brand overflow-hidden transition-all duration-300 ease-linear"
                    style={{ width: `${progress}%` }}
                 >
                   Glanz
                 </span>
              </span>
            </h1>
            <div className="h-1 w-64 bg-white/10 rounded-full mx-auto mt-6 overflow-hidden relative">
              <div 
                className="h-full bg-brand shadow-[0_0_10px_#00C2A0]" 
                style={{ width: `${progress}%`, transition: 'width 0.2s ease-out' }}
              >
                {/* Shimmer effect on the bar */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-full -translate-x-full animate-shimmer"></div>
              </div>
            </div>
            <p className="mt-4 text-brand/80 font-mono text-sm tracking-widest">{progress}% GEREINIGT</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-anthracite text-white font-sans selection:bg-brand selection:text-white animate-slide-up">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      {/* AI Chat Agent */}
      {React.createElement('elevenlabs-convai', { 'agent-id': 'agent_6201kgq4v48qf9pav1spqf42cdt9' } as any)}
    </div>
  );
};

export default App;