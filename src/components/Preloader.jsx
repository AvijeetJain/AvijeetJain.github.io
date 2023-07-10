import React from 'react';
import preloader from '../assets';
import '../index.css';

const Preloader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <video autoPlay loop muted className="w-64">
        <source src={preloader} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="mt-8 text-white flex items-center">
        <p className="font-semibold text-2xl mr-2">Loading</p>
        <div className="flex space-x-1">
          <span className="animate-dot-1 text-4xl">.</span>
          <span className="animate-dot-2 text-4xl">.</span>
          <span className="animate-dot-3 text-4xl">.</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;