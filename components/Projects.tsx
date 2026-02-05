import React, { useState } from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Terrasse' | 'Einfahrt' | 'Denkmal'>('All');

  // Generating projects with the provided URLs
  const projects: Project[] = [
    {
      id: '1',
      title: 'Villa Musterstadt',
      category: 'Terrasse',
      description: 'Travertin Reinigung & Versiegelung',
      imageAfter: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
      imageBefore: 'https://picsum.photos/id/20/800/600',
    },
    {
      id: '2',
      title: 'Einfahrt Fam. Schmidt',
      category: 'Einfahrt',
      description: 'Betonsteinpflaster Aufbereitung',
      imageAfter: 'https://image2url.com/r2/default/files/1770148531787-625f832c-b9ab-474f-82ff-15e74c521ca6.png',
      imageBefore: 'https://picsum.photos/id/21/800/600',
    },
    {
      id: '3',
      title: 'Historischer Marktplatz',
      category: 'Denkmal',
      description: 'Schonende Reinigung Sandstein',
      imageAfter: 'https://image2url.com/r2/default/files/1770148434161-1ccfed80-6b8c-49ec-89b2-73c683bb54df.png',
      imageBefore: 'https://picsum.photos/id/22/800/600',
    },
    {
      id: '4',
      title: 'Moderne Residenz',
      category: 'Terrasse',
      description: 'Feinsteinzeug Intensivreinigung',
      imageAfter: 'https://image2url.com/r2/default/files/1770148565420-8274e29a-17a2-4980-a454-9746fd4e9e1f.png',
      imageBefore: 'https://picsum.photos/id/23/800/600',
    },
     {
      id: '5',
      title: 'Gewerbepark Nord',
      category: 'Einfahrt',
      description: 'Großflächenreinigung & Ölflecken',
      imageAfter: 'https://image2url.com/r2/default/files/1770148623986-cc5ef50e-f6a2-4c5c-bac3-60a9c60be79b.png',
      imageBefore: 'https://picsum.photos/id/24/800/600',
    },
     {
      id: '6',
      title: 'Stadtbrunnen',
      category: 'Denkmal',
      description: 'Algen & Kalkentfernung',
      imageAfter: 'https://image2url.com/r2/default/files/1770148594010-5b5f5f0d-c6f4-4997-920c-9ec2600b0335.png',
      imageBefore: 'https://picsum.photos/id/25/800/600',
    },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-anthracite-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <RevealOnScroll>
             <h2 className="text-brand font-bold tracking-widest uppercase text-sm mb-2">Referenzen</h2>
             <h3 className="text-4xl font-display font-bold text-white">Unsere Ergebnisse.</h3>
             <p className="text-gray-400 mt-2 text-sm">Schieben Sie den Regler, um den Vorher-Nachher Effekt zu sehen.</p>
          </RevealOnScroll>
          
          <RevealOnScroll direction="left" className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {['All', 'Terrasse', 'Einfahrt', 'Denkmal'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  filter === cat 
                    ? 'bg-brand text-anthracite shadow-[0_0_15px_rgba(0,194,160,0.4)]' 
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </RevealOnScroll>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredProjects.map((project, idx) => (
            <RevealOnScroll key={project.id} delay={idx * 50} className="group">
              
              {/* Slider Container */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-xl mb-6 hover:shadow-brand/20 transition-all duration-500">
                <BeforeAfterSlider 
                  beforeImage={project.imageBefore}
                  afterImage={project.imageAfter}
                  alt={project.title}
                  loading="lazy"
                />
              </div>

              {/* Text Content - Positioned below for better UX while dragging */}
              <div className="px-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-brand text-xs font-bold uppercase tracking-wider">{project.category}</span>
                  <div className="h-px w-8 bg-white/20"></div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">{project.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
              </div>

            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;