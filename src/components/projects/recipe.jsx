import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoPersonSharp } from "react-icons/io5";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiArrowUturnLeft } from "react-icons/hi2";
import image from '../../assets/images/recipe.png';
import recipe from '../../assets/images/recipe(2).png';
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

const RecipeApp = () => {
    const scrollRef = useRef(null);

  return (
    <div className="w-screen h-full mt-4 pt-12" ref={scrollRef}>
      <div className="sm:px-16 px-6 mt-12 flex flex-col items-center justify-center">
        <Link to="/" className="flex flex-row text-xl sm:text-3xl absolute top-24 left-[5vw]">
          <HiArrowUturnLeft />
          <span>Back</span>
        </Link>
        <motion.h1
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          className="text-5xl sm:text-7xl text-center sm:w-display w-feature font-curved"
        >RecipeApp</motion.h1>
        <div className="my-8 h-one w-full bg-both" />

        <img src={image} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl mb-8 duration-500 hover:scale-105" />
        <img src={recipe} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl mb-8 duration-500 hover:scale-105" />

        <div className="w-feature mb-8 px-8">
          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Description</motion.h2>

          <motion.p
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="mb-2">Recipe-app is a comprehensive web application designed for food enthusiasts and home cooks alike, providing a platform to share and discover delicious recipes. With its intuitive interface and robust features, RecipeHub aims to foster a vibrant community of culinary enthusiasts, encouraging them to exchange ideas, and simplify the process of meal planning and grocery shopping.</motion.p>

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Features</motion.h2>

          <ul>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Recipe Submission :  </span> Authenticated users can submit their own recipes, including a title, description, ingredients list, step-by-step instructions, cooking time, and difficulty level. </li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">User Authentication :  </span>Users can create a secure account and log in to access personalized features, such as saving favorite recipes, creating grocery lists, and managing their shared recipes.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Recipe Categorization :  </span>Recipes can be categorized based on various criteria, such as cuisine type, dietary restrictions (e.g., vegetarian, gluten-free, keto), cooking method, or occasion, making it easier for users to search and discover recipes that match their preferences.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Grocery List Generation :  </span> Users can easily create a grocery list by selecting the ingredients from one or more recipes. The app will consolidate the ingredients, eliminating duplicates, and allowing users to adjust quantities based on their needs.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Social Sharing :  </span> Users can share their favorite recipes or newly created recipes with friends and family through social media integration or direct sharing links.</li>
          </ul> 

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Collaborators</motion.h2>

          <div>
            <div className="flex flex-col mb-4">
              <h1 className="flex flex-row mb-2">
                <IoPersonSharp className="mr-2 mt-1" />
                <span>Rashed Arman</span>
              </h1>
              <a  href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex flex-row ml-8">
                <span>-  Linkedin</span>
                <FaLinkedinIn className="ml-2 mt-1 text-lg" />
              </a>
              <a  href="https://github.com/rashedarman" target="_blank" rel="noreferrer" className="flex flex-row ml-8">
                <span>-  Github</span>
                <FaGithub className="ml-2 mt-1 text-lg" />
              </a>
            </div>
          </div>

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Tech Stack</motion.h2>

          <ul>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Ruby on rails :  </span> Backend framework</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Potgresql :  </span>Backend tool</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Devise :  </span> Authentication tool</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">CSS :  </span> Frontend tool</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">HTML :  </span> Frontend tool</li>
          </ul> 

        </div>

        <div className="flex sm:flex-row flex-col justify-center items-center mt-8">
          <a href="https://github.com/rashedarman/rails-recipe-app" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:ml-4 my-4 text-xl">
            <span>See Source</span>
            <FaGithub className="mt-1 ml-1" />
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default RecipeApp;
