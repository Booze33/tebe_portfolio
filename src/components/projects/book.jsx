import React, { useRef } from 'react';
import { motion } from 'framer-motion';

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

const Book = () => {
  const scrollRef = useRef(null);

  return (
    <div className="w-screen h-full mt-4 pt-12 px-8 sm:px-16" ref={scrollRef}>
      <div>
        <motion.h1
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          className="text-5xl sm:text-7xl text-center sm:w-display w-feature font-curved"
          >Book store app</motion.h1>
      </div>
    </div>
  )
}

export default Book;
