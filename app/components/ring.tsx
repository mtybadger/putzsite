'use client'

import React from 'react';
import Image from 'next/image';

const Ring: React.FC = () => {
  const items = [
    { src: 'marmot.svg', alt: 'Marmot', label: 'Marmot' },
    { src: 'ripstik.svg', alt: 'Ripstik', label: 'Ripstik' },
    { src: 'deck.svg', alt: 'Deck', label: 'Deck' },
    { src: 'impact.svg', alt: 'Impact', label: 'Impact' },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="relative w-96 h-96">
        {items.map((item, index) => (
          <div
            key={item.src}
            className="absolute w-24 h-24 transition-transform duration-300 ease-in-out hover:scale-125 z-20"
            style={{
              top: `${50 - 75 * Math.cos(index * Math.PI / 2)}%`,
              left: `${50 + 100 * Math.sin(index * Math.PI / 2)}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
            <div className="text-center mt-2 text-white">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ring;
