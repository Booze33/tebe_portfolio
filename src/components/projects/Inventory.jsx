import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowUturnLeft } from "react-icons/hi2";
import Footer from '../footer';
import image from '../../assets/images/phanox.png';
import image_2 from '../../assets/images/phanox(3).png';
import commerce from '../../assets/images/phanox(2).png';
import { IoPersonSharp } from "react-icons/io5";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";

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

const Inventory = () => {
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
        >Inventory Management System</motion.h1>
        <div className="my-8 h-one w-full bg-both" />

        <img src={image} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl mb-8 duration-500 hover:scale-105" />
        <img src={commerce} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl mb-8 duration-500 hover:scale-105" />
        <img src={image_2} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl mb-8 duration-500 hover:scale-105" />

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
            className="mb-2">The Inventory Management System is designed to streamline and automate the process of managing inventory in a business environment. This system aims to enhance the efficiency of inventory tracking, reduce errors, and provide real-time data to support decision-making processes.</motion.p>

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Features</motion.h2>

          <ul>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Backend Integration :  </span> The app will integrate with a robust backend system to fetch and update data, manage user accounts and preferences,  and facilitate communication with dealerships or authorized locations.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Deployment and Cloud Services :  </span>AWS EC2: Used for hosting the backend Node.js application. AWS RDS: Managed relational database service for PostgreSQL. AWS Amplify: Hosting service for the Next.js frontend application. AWS S3: Object storage service used for managing images and other assets.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Inventory Management :  </span>A dedicated inventory page where users can view, search, and manage inventory items. Ability to create new products through a modal interface.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Responsive Design :  </span> Fully responsive design that adapts to different screen sizes, ensuring usability on both desktop and mobile devices.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Charting and Data Visualization :  </span> Integration with Recharts for dynamic data visualization.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">User and Settings Pages :  </span> User management functionality and settings customization options for a personalized experience.</li>
          </ul> 

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Tech Stack</motion.h2>

          <ul>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Next.js :  </span> Frontend framework</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Node.js :  </span> Backend framework</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">AWS :  </span> Cloud Services</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Potgresql :  </span>Database tool</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">React-redux :  </span> Frontend framework</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">TailwindCSS :  </span> Frontend tool</li>
          </ul> 

        </div>

        <div className="flex sm:flex-row flex-col justify-center items-center mt-8">
          <a href="https://main.d5p22dpn9nxyx.amplifyapp.com/" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:mx-2 my-2 text-xl">
            <span>Live Demo</span>
            <FaPlay className="mt-1 ml-1 text-xl" />
          </a>
          <a href="https://github.com/Booze33/phanox" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:ml-4 my-4 text-xl">
            <span>Get Code</span>
            <FaGithub className="mt-1 ml-1" />
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Inventory