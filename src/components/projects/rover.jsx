import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from '../footer';

const pathVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      delay: 1,
      ease: "easeInOut"
    }
  }
};

const RoverApp = () => {
  const scrollRef = useRef(null);

  return (
    <div className="w-screen h-full mt-4 pt-12" ref={scrollRef}>
      <div className="sm:px-16 px-6 mt-12 flex flex-col items-center justify-center">
        <motion.h1
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          className="text-5xl sm:text-7xl text-center sm:w-display w-feature font-curved"
        >RoverApp store app</motion.h1>
        <div className="my-8 h-one w-full bg-both" />
      </div>
      <Footer />
    </div>
  )
}

export default RoverApp;
