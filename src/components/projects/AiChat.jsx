import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { HiArrowUturnLeft } from "react-icons/hi2";
import image from '../../assets/images/chat.png';
import commerce from '../../assets/images/chat(2).png';
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

const AiChat = () => {
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
        >AI - Chat App</motion.h1>
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
            className="mb-2">This project is a full-stack chat application that integrates with ChatGPT and OpenAI's API, providing AI-powered chat functionalities. The application allows users to participate in group chats, send messages and images, and leverage AI capabilities for intelligent conversations and code assistance.</motion.p>

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Features</motion.h2>

          <ul>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Responsive Design :  </span>The application will be designed to be responsive and compatible with various devices, including desktops, tablets, and mobile phones, ensuring a seamless user experience across platforms.</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">User Authentication :  </span>User authentication and registration system with the use of chatEngine</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">AI Integration :  </span> Integration with OpenAI's API for AI-powered chat and code assistance, AI chat bot for intelligent conversations and answering user queries, AI code assistant for generating code snippets based on user prompts (e.g., "give me a function that generates a random number in JavaScript")</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">UI Design :  </span> Responsive and modern user interface with custom design</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Group chat functionality with real-time messaging and image sharing</span></li>
          </ul> 

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Tech Stack</motion.h2>

          <ul>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Node JS :  </span> Backend library</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Express JS :  </span> Backend library</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">OpenAI :  </span>API Integration</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">React JS :  </span> Frontend tool</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">SCSS :  </span> Frontend tool</li>
              <li><span className="text-base mt-4 mb-2 font-curved text-both">Redux Toolkit</span></li>
          </ul>

          <motion.p
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="mb-2">This full-stack chat application combines the power of modern web technologies with advanced AI capabilities from OpenAI's API. Users can engage in group conversations, leverage AI-powered chat assistants, and benefit from intelligent code generation and auto-completion features. The project incorporates best practices and follows a modular architecture, making it a valuable learning resource for both beginners and experienced developers.</motion.p>

        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center mt-8">
          <a href="https://github.com/Booze33/openai" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:mx-2 my-2 text-xl">
            <span>See Source</span>
            <FaGithub className="mt-1 text-2xl" />
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default AiChat
