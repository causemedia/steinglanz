import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-anthracite-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          {/* Logo Icon */}
          <div className="w-8 h-8 opacity-80 hover:opacity-100 transition-opacity">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="footerFace1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00C2A0" />
                  <stop offset="100%" stopColor="#00967A" />
                </linearGradient>
                <linearGradient id="footerFace2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00E0BA" />
                  <stop offset="100%" stopColor="#00C2A0" />
                </linearGradient>
              </defs>
              <path d="M20 36L4 27V13L20 4L36 13V27L20 36Z" fill="#2C2C2C" stroke="#00C2A0" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M20 4L36 13L20 22L4 13L20 4Z" fill="url(#footerFace2)" opacity="0.9" />
              <path d="M20 22L36 13V27L20 36V22Z" fill="url(#footerFace1)" opacity="0.8" />
              <path d="M20 22L4 13V27L20 36V22Z" fill="#1a1a1a" opacity="0.6" />
              <path d="M28 8L29.5 5L31 8L34 9.5L31 11L29.5 14L28 11L25 9.5L28 8Z" fill="white" className="animate-pulse" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-white leading-none">Stein<span className="text-brand">Glanz</span></h2>
            <p className="text-gray-500 text-sm mt-1">© 2024 SteinGlanz GmbH. Alle Rechte vorbehalten.</p>
          </div>
        </div>
        
        <div className="flex gap-8">
            {['Impressum', 'Datenschutz', 'AGB'].map(item => (
                <a key={item} href="#" className="text-sm text-gray-400 hover:text-brand transition-colors">{item}</a>
            ))}
        </div>
        
        <div className="flex gap-4">
            {/* Social Mockups */}
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-anthracite transition-all cursor-pointer text-gray-400">FB</div>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-anthracite transition-all cursor-pointer text-gray-400">IG</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;