import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from '../footer';
import image from '../../assets/images/e-commerce.png';
import commerce from '../../assets/images/commerce.png';
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
            className="mb-2">Land-Rover e-commerce app, designed to redifine your car buying experience! Whether you area n adventure seeker or a tech enthusiast or simply in search of luxury, our app has been meticulously created crafted to carter to your every need.</motion.p>

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Features</motion.h2>

          <ul>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Backend Integration :  </span> The app will integrate with a robust backend system to fetch and update vehicle data, manage user accounts and preferences, process test drive reservations, and facilitate communication with dealerships or authorized locations.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">User Authentication :  </span>Users can create a secure account and log in to access personalized features, save their preferences, and manage their test drive appointments.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Admin Panel :  </span>An admin panel will be available for authorized personnel to manage vehicle data, update pricing and availability, monitor test drive reservations, and access user activity reports.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Test Drive Reservation :  </span> Authenticated users can schedule test drive appointments for their preferred Range Rover models at their nearest dealership or authorized location. The app will integrate with the dealership's calendar system to ensure availability and provide seamless scheduling.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Vehicle Showcase :  </span> The app will feature an extensive catalog of Range Rover models, including detailed specifications, high-resolution images, and interactive 360-degree views. Users can filter and sort vehicles based on their preferences, such as model, year, trim level, and price range.</li>
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
                <span>Daniel Falcon</span>
              </h1>
              <a  href="https://www.linkedin.com/in/danfall/" target="_blank" rel="noreferrer" className="flex flex-row ml-8">
                <span>-  Linkedin</span>
                <FaLinkedinIn className="ml-2 mt-1 text-lg" />
              </a>
              <a  href="https://github.com/Danfall369" target="_blank" rel="noreferrer" className="flex flex-row ml-8">
                <span>-  Github</span>
                <FaGithub className="ml-2 mt-1 text-lg" />
              </a>
            </div>
            <div className="flex flex-col mb-4">
              <h1 className="flex flex-row mb-2">
                <IoPersonSharp className="mr-2 mt-1" />
                <span>Nabeel Ahmed</span>
              </h1>
              <a  href="https://www.linkedin.com/in/nabeel129/" target="_blank" rel="noreferrer" className="flex flex-row ml-8">
                <span>-  Linkedin</span>
                <FaLinkedinIn className="ml-2 mt-1 text-lg" />
              </a>
              <a  href="https://github.com/Metaverse-Nabeel" target="_blank" rel="noreferrer" className="flex flex-row ml-8">
                <span>-  Github</span>
                <FaGithub className="ml-2 mt-1 text-lg" />
              </a>
            </div>
            <div className="flex flex-col mb-4">
              <h1 className="flex flex-row mb-2">
                <IoPersonSharp className="mr-2 mt-1" />
                <span>Emmanuel Mhango</span>
              </h1>
              <a  href="https://www.linkedin.com/in/emmanuellmhango/" target="_blank" rel="noreferrer" className="flex flex-row ml-8">
                <span>-  Linkedin</span>
                <FaLinkedinIn className="ml-2 mt-1 text-lg" />
              </a>
              <a  href="https://github.com/emmanuellmhango" target="_blank" rel="noreferrer" className="flex flex-row ml-8">
                <span>-  Github</span>
                <FaGithub className="ml-2 mt-1 text-lg" />
              </a>
            </div>
            <div className="flex flex-col mb-4">
              <h1 className="flex flex-row mb-2">
                <IoPersonSharp className="mr-2 mt-1" />
                <span>Alejandro Velasquez</span>
              </h1>
              <a  href="https://www.linkedin.com/in/velzckcode/" target="_blank" rel="noreferrer" className="flex flex-row ml-8">
                <span>-  Linkedin</span>
                <FaLinkedinIn className="ml-2 mt-1 text-lg" />
              </a>
              <a  href="https://github.com/VelzckC0D3" target="_blank" rel="noreferrer" className="flex flex-row ml-8">
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
            <li><span className="text-base mt-4 mb-2 font-curved text-both">React-redux :  </span> Frontend framework</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">CSS :  </span> Frontend tool</li>
          </ul> 

        </div>

        <div className="flex sm:flex-row flex-col justify-center items-center mt-8">
          <a href="https://land-rover-e.netlify.app/" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:mx-2 my-2 text-xl">
            <span>Live Demo</span>
            <FaPlay className="mt-1 ml-1 text-xl" />
          </a>
          <a href="https://github.com/VelzckC0D3/Land-Rover-E-Commerce" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:ml-4 my-4 text-xl">
            <span>Get Code</span>
            <FaGithub className="mt-1 ml-1" />
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default RoverApp;
