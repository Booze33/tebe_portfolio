import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HiArrowUturnLeft } from "react-icons/hi2";
import image from '../../assets/images/expense.png';
import commerce from '../../assets/images/expense(2).png';
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

const ExpenseTracker = () => {
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
        >ExpenseTracker app</motion.h1>
        <div className="my-8 h-one w-full bg-both" />

        <img src={image} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl mb-8 duration-500 hover:scale-105" />
        <img src={commerce} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl mb-8 duration-500 hover:scale-105" />

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
            className="mb-2">ExpenseTracker is a comprehensive web application designed to help users efficiently manage and track their expenses across multiple categories. With its user-friendly interface and robust features, ExpenseTracker aims to provide users with a clear overview of their spending habits, enabling them to make informed financial decisions.</motion.p>

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Features</motion.h2>

          <ul>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Responsive Design :  </span>The application will be designed to be responsive and compatible with various devices, including desktops, tablets, and mobile phones, ensuring a seamless user experience across platforms.</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">User Authentication :  </span>Users can create a secure account and log in to access personalized features, ensuring that their expense data remains private and confidential.</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Expense Categories :  </span>The app will provide a predefined list of common expense categories, such as food, transportation, housing, utilities, entertainment, healthcare, and education. Users can also create custom categories to suit their specific needs.</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Recurring Expenses :  </span> Users can set up recurring expenses for fixed payments, such as rent, subscriptions, or utility bills, to streamline the logging process and ensure accurate tracking.</li>
          </ul> 

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Tech Stack</motion.h2>

          <ul>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Ruby on rails :  </span> Backend framework</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Devise :  </span> Authentication tool</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Potgresql :  </span>Backend tool</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">HTML :  </span> Frontend tool</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">CSS :  </span> Frontend tool</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">RSPEC :  </span> Backend test</li>
          </ul> 
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center mt-8">
          <a href="https://github.com/Booze33/budget-app" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:mx-2 my-2 text-xl">
            <span>See Source</span>
            <FaGithub className="mt-1 text-2xl" />
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default ExpenseTracker;
