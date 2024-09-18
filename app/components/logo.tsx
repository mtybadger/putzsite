'use client'

import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="logo-container transition-transform duration-300 ease-in-out hover:scale-110">
        <div className="animate-gentle-movement">
          <Image
            src="logo.svg"
            alt="Logo"
            width={400}
            height={400}
            className="logo-image"
            priority
          />
        </div>
      </div>
      <style jsx global>{`
        @keyframes gentle-movement {
          0%, 100% {
            transform: scale(1) rotate(0deg) translate(0px, 0px);
          }
          25% {
            transform: scale(1.03) rotate(2deg) translate(5px, -5px);
          }
          50% {
            transform: scale(1.05) rotate(-1deg) translate(-3px, 3px);
          }
          75% {
            transform: scale(1.02) rotate(1deg) translate(2px, 2px);
          }
        }
        .animate-gentle-movement {
          animation: gentle-movement 10s ease-in-out infinite;
        }
        .logo-image {
          image-rendering: pixelated;
        }
      `}</style>
    </div>
  );
};

export default Logo;
