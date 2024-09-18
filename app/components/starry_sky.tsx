'use client'

import React from 'react';

const StarrySky: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden absolute top-0 left-0 z-[-1]">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="star-pattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
            {/* Plus-shaped star */}
            <g className="star twinkle-1">
              <rect x="49" y="47" width="2" height="6" fill="#FFF" />
              <rect x="47" y="49" width="6" height="2" fill="#FFF" />
            </g>
            {/* Larger star */}
            <g className="star twinkle-2">
              <rect x="180" y="133" width="12" height="2" fill="#FFF" />
              <rect x="185" y="128" width="2" height="12" fill="#FFF" />
              <rect x="183" y="131" width="6" height="6" fill="#FFF" />
            </g>
            {/* Small star */}
            <g className="star twinkle-3">
              <rect x="319" y="269" width="3" height="1" fill="#FFF" />
              <rect x="320" y="268" width="1" height="3" fill="#FFF" />
            </g>
            {/* Tiny star */}
            <rect x="100" y="200" width="2" height="2" fill="#FFF" className="star twinkle-4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#star-pattern)" />
      </svg>
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .star {
          animation: twinkle ease-in-out infinite;
        }
        .twinkle-1 { animation-duration: 4s; }
        .twinkle-2 { animation-duration: 5s; animation-delay: 1s; }
        .twinkle-3 { animation-duration: 6s; animation-delay: 2s; }
        .twinkle-4 { animation-duration: 3s; animation-delay: 1.5s; }
      `}</style>
    </div>
  );
};

export default StarrySky;