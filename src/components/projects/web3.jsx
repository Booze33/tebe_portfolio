import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HiArrowUturnLeft } from "react-icons/hi2";
import image from '../../assets/images/crowdFunding.jpg';
import commerce from '../../assets/images/crodFunding(2).png';
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


const Web3 = () => {
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
        >Web3 - CrowdFunding App</motion.h1>
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
            className="mb-2">This project is a web3 crowdfunding application built with React, allowing users to create and fund campaigns on the blockchain. The application utilizes smart contracts to facilitate secure and transparent transactions.</motion.p>

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Features</motion.h2>

          <ul>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Responsive Design :  </span>The application will be designed to be responsive and compatible with various devices, including desktops, tablets, and mobile phones, ensuring a seamless user experience across platforms.</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">User Authentication :  </span>Connect to MetaMask wallet for secure blockchain transactions.</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Funding :  </span> Fund existing campaigns by donating cryptocurrency (e.g., Ethereum).</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">User Actions :  </span> View the list of campaigns, their progress, and the number of backers.</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Create and launch crowdfunding campaigns with details like title, description, goal amount, and deadline.</span></li>
          </ul> 

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Tech Stack</motion.h2>

          <ul>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Web JS :  </span> Blockchain library</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Meta Mask :  </span> Wallet Integration</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Solidity :  </span>Smart Contracts</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">React JS :  </span> Frontend tool</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Tailwind CSS :  </span> Frontend tool</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Thirdweb platform</span></li>
          </ul> 
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center mt-8">
          <a href="https://github.com/Booze33/web3-app" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:mx-2 my-2 text-xl">
            <span>See Source</span>
            <FaGithub className="mt-1 text-2xl" />
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Web3
