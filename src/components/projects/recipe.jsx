import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const RecipeApp = () => {
    const scrollRef = useRef(null);

  return (
    <div className="w-screen h-full mt-4 pt-12 px-8 sm:px-16" ref={scrollRef}>
      <h1>RecipeApp</h1>
    </div>
  )
}

export default RecipeApp;
