import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-anthracite-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-display font-bold text-white mb-2">Stein<span className="text-brand">Glanz</span></h2>
          <p className="text-gray-500 text-sm">© 2024 SteinGlanz GmbH. Alle Rechte vorbehalten.</p>
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