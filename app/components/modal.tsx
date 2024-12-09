'use client'

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const closeModal = () => {
    router.push('/');
  };

  useEffect(() => {
    setIsAnimating(true);
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
      
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${!isVisible ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
      <div 
        className={`bg-black border-2 border-white p-8 rounded-lg max-w-2xl w-full mx-4 relative transform transition-all duration-500 ${
          isAnimating ? 'animate-modal-open' : ''
        }`}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          ✕
        </button>

        {children}
      </div>
      <style jsx>{`
        @keyframes modalOpen {
          0% {
            transform: scale(0, 0);
          }
          50% {
            transform: scale(1.0, 0.1);
          }
          100% {
            transform: scale(1, 1);
          }
        }
        .animate-modal-open {
          animation: modalOpen 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Modal;
