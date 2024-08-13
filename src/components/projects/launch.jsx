import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowUturnLeft } from "react-icons/hi2";
import Footer from '../footer';
import image from '../../assets/images/launch.png';
import image_2 from '../../assets/images/launch(3).png';
import commerce from '../../assets/images/launch(2).png';
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

const Launch = () => {
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
        >LaunchAI</motion.h1>
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
            className="mb-2">Launch AI is revolutionizing the startup ecosystem by offering a cutting-edge platform tailored for student-founders. Our AI-driven tools, namely the Dashboard, the MVP builder and the User Feedback Analyzer, streamline the startup journey, enabling rapid iterations and precise market validation. Launch AI's Dashboard provides a dynamic digital presence for startup ideas, evolving with new insights and feedback. By addressing the critical challenge of speed, we empower student-founders to focus on innovation rather than getting bogged down by business complexities. Our vision is to make Launch AI an essential part of every startup's launch journey. Join us in transforming how startups are launched and be part of the future of innovation.</motion.p>

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Features</motion.h2>

          <ul>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">User Authentication :  </span> Integrate JWT to manage user authentication. Provide secure sign-up and login functionalities. Ensure user session management and data security.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Project visualization :  </span>Allow users visualize the startup with the provide data. Helps with a proper startup</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Responsive Design :  </span> Fully responsive design that adapts to different screen sizes, ensuring usability on both desktop and mobile devices.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Tex Generation with FalconAI API :  </span> Integrate FalconAI's Text model to generate data from text inputs.</li>
          </ul> 

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Tech Stack</motion.h2>

          <ul>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Django :  </span> Frontend framework</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">CSS :  </span>Frontend tool</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">FalconAI API :  </span> text Generation</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">TailwindCSS :  </span> Frontend tool</li>
          </ul> 

        </div>

        <div className="flex sm:flex-row flex-col justify-center items-center mt-8">
          <a href="https://lablab.ai/event/falcon-hackathon/ninja-hackers/launch-ai" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:mx-2 my-2 text-xl">
            <span>Presentation</span>
            <FaPlay className="mt-1 ml-1 text-xl" />
          </a>
          <a href="https://github.com/Fouad-Khelil/launchai/" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:ml-4 my-4 text-xl">
            <span>Get Code</span>
            <FaGithub className="mt-1 ml-1" />
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Launch