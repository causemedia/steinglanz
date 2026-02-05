import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage: string; 
  afterImage: string;
  alt: string;
  loading?: 'eager' | 'lazy';
}

const BeforeAfterSlider: React.FC<BeforeAfterProps> = ({ 
  beforeImage, 
  afterImage, 
  alt,
  loading = 'eager'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchend', handleUp);
    return () => {
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchend', handleUp);
    };
  }, []);

  return (
    <div 
      className="relative w-full h-full overflow-hidden select-none cursor-ew-resize group"
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* Layer 1: After Image (Clean) - Acts as background */}
      <img
        src={afterImage}
        alt={`${alt} Nachher`}
        loading={loading}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      
      {/* Label After (Right) */}
      <div className="absolute top-4 right-4 bg-brand/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-anthracite z-10 shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        NACHHER
      </div>

      {/* Layer 2: Before Image (Dirty) - On top, clipped */}
      <img
        src={beforeImage}
        alt={`${alt} Vorher`}
        loading={loading}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ 
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` 
        }}
      />
      
      {/* Label Before (Left) */}
      <div className="absolute top-4 left-4 bg-anthracite/80 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-white z-10 border border-white/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        VORHER
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand rounded-full flex items-center justify-center shadow-lg border-2 border-white transition-transform duration-200 group-hover:scale-110">
          <ArrowLeftRight size={14} className="text-anthracite" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;