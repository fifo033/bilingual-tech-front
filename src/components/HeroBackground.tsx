
import React from 'react';

interface HeroBackgroundProps {
  slideIndex: number;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ slideIndex }) => {
  const getBackgroundPattern = () => {
    switch (slideIndex) {
      case 0:
        return (
          <div className="absolute inset-0 opacity-10">
            {/* Geometric pattern for first slide */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rotate-45 animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        );
      case 1:
        return (
          <div className="absolute inset-0 opacity-10">
            {/* Grid pattern for second slide */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 via-blue-600 to-purple-700"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
            <div className="absolute top-16 right-16 w-20 h-20 bg-white/10 transform rotate-12 animate-bounce"></div>
            <div className="absolute bottom-16 left-16 w-28 h-28 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/3 left-1/2 w-12 h-12 bg-white/10 rotate-45 animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
        );
      default:
        return null;
    }
  };

  return getBackgroundPattern();
};

export default HeroBackground;
