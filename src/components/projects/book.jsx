import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HiArrowUturnLeft } from "react-icons/hi2";
import Footer from '../footer';
import book from '../../assets/images/book.png';
import booktwo from '../../assets/images/book(2).png';

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
          >Book store app</motion.h1>
        <div className="my-8 h-one w-full bg-both" />

        <img src={book} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl mb-8 duration-500 hover:scale-105" />
        <img src={booktwo} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl mb-8 duration-500 hover:scale-105" />

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
            className="mb-2">This BookTrail is a web application designed for avid readers and book enthusiasts, providing a platform to track their reading progress, discover new books, and connect with a community of fellow bibliophiles.</motion.p>

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Features</motion.h2>

          <ul>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Backend Integration :  </span>The app will integrate with a robust backend system to fetch book data from the database, store user data securely, and facilitate social interactions and recommendations.</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">User Authentication :  </span>Users can create an account and securely log in to access personalized features and maintain their reading history.</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Progress Tracking :  </span>Users can track their reading progress for each book they're currently reading, setting page or chapter goals and updating their progress as they read.</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Book Details :  </span> Each book listing will include detailed information such as the book's title, author, description, publication date, genre, and average rating from the community.</li>
          </ul> 

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Tech Stack</motion.h2>

          <ul>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Ruby on rails :  </span> Backend framework</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Potgresql :  </span>Backend tool</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">React-redux :  </span> Frontend framework</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">CSS :  </span> Frontend tool</li>
          </ul> 
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center mt-8">
          <a href="https://github.com/Booze33/book-store-backend" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:mx-2 my-2 text-xl">
            <span>See Backend</span>
            <FaGithub className="mt-1 text-2xl" />
          </a>
          <a href="https://github.com/Booze33/book-store" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:ml-4 my-4 text-xl">
            <span>See Frontend</span>
            <FaGithub className="mt-1" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Book;
