'use client'

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Ring: React.FC = () => {
  const router = useRouter();

  const items = [
    { src: 'marmot.svg', alt: 'Residents', label: 'Residents', path: '/residents' },
    { src: 'ripstik.svg', alt: 'Photos', label: 'Photos', path: '/photos' },
    { src: 'deck.svg', alt: 'Projects', label: 'Projects', path: '/projects' },
    { src: 'impact.svg', alt: 'About', label: 'About', path: '/about' },
  ];

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  const renderItem = (item: typeof items[0]) => (
    <div
      key={item.src}
      className="w-24 h-24 transition-transform duration-300 ease-in-out hover:scale-125 z-20 cursor-pointer"
      onClick={() => handleItemClick(item.path)}
    >
      <div>
        <Image
          src={item.src}
          alt={item.alt}
          width={96}
          height={96}
          className="w-full h-full object-contain"
        />
        <div className="text-center mt-2 text-white">{item.label}</div>
      </div>
    </div>
  );

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="relative w-full md:w-96 md:h-96">
          <div className="md:hidden flex flex-col items-center justify-center gap-10">
            {items.slice(0, 2).map(renderItem)}
            <div className="h-[150px]" />
            {items.slice(2).map(renderItem)}
          </div>
          <div className="hidden md:block">
            {items.map((item, index) => (
              <div
                key={item.src}
                className="absolute w-24 h-24 transition-transform duration-300 ease-in-out hover:scale-125 z-20 transform-origin-center cursor-pointer"
                style={{
                  top: `calc(${50 - 75 * Math.cos(index * Math.PI / 2)}% - 48px)`,
                  left: `calc(${50 + 100 * Math.sin(index * Math.PI / 2)}% - 48px)`,
                  transformOrigin: 'center',
                }}
                onClick={() => handleItemClick(item.path)}
              >
                <div>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                  <div className="text-center mt-2 text-white">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ring;
