import React from 'react';
import Footer from './footer';
import Boxes from '../features/boxes';

const Portfolio = () => {

  return (
    <div className="w-screen h-full">
      <div className="sm:px-12 px-6 mt-12 flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-7xl text-center sm:w-display w-feature font-curved z-20">Tebe Tisloh</h1>
        <h1 className="text-4xl sm:text-7xl text-center sm:w-display w-feature font-curved z-20">I am glad you're here.</h1>
      </div>

      <Boxes className="mt-minus flex flex-col items-center justify-center z-20" />

      <section></section>
      <Footer />
    </div>
  );
};

export default Portfolio;
