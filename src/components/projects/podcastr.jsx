import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowUturnLeft } from "react-icons/hi2";
import Footer from '../footer';
import image from '../../assets/images/podcastr.png';
import image_2 from '../../assets/images/podcastr(3).png';
import commerce from '../../assets/images/podcastr(2).png';
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

const Podcastr = () => {
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
        >Podcastr</motion.h1>
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
            className="mb-2">The goal of this project is to develop a Software as a Service (SaaS) application specifically designed for podcast management. The application will allow users to create, manage, and distribute podcasts with ease. Key features include user authentication, podcast creation with CRUD (Create, Read, Update, Delete) functionalities, advanced search and filter options, audio generation using OpenAI API, and thumbnail creation. The tech stack includes Next.js for the frontend, Convex for backend operations, TailwindCSS for styling, and Clerk for authentication.</motion.p>

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Features</motion.h2>

          <ul>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">User Authentication :  </span> Integrate Clerk to manage user authentication. Provide secure sign-up and login functionalities. Ensure user session management and data security.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Deployment and Maintenance :  </span>Deploy the application on a reliable hosting service such as Vercel or Netlify. Implement monitoring and logging to maintain the application's health.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Podcast Management :  </span>Allow users to create, read, update, and delete podcast entries. Provide a user-friendly form for podcast creation using react-hook-form and Zod for validation. Enable users to upload audio files and metadata for each podcast.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Responsive Design :  </span> Fully responsive design that adapts to different screen sizes, ensuring usability on both desktop and mobile devices.</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Audio Generation with OpenAI API :  </span> Integrate OpenAI's Text-to-Speech model to generate podcast audio from text inputs. Allow customization of voice and audio format to suit user preferences.</li>
          </ul> 

          <motion.h2 
            variants={pathVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ root: scrollRef }}
            className="text-xl mt-4 mb-2 font-curved text-both">Tech Stack</motion.h2>

          <ul>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Next.js :  </span> Frontend framework</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Clerk :  </span> Authentication Service</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Vercel :  </span> Deployment</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">Convex :  </span>Database tool</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">OpenAI API :  </span> Audio Generation</li>
            <li><span className="text-base mt-4 mb-2 font-curved text-both">TailwindCSS :  </span> Frontend tool</li>
          </ul> 

        </div>

        <div className="flex sm:flex-row flex-col justify-center items-center mt-8">
          <a href="https://ai-podcast-chi.vercel.app/podcasts/j9757rx1e4cg25nqby7dbkzv3h6w1h3s" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:mx-2 my-2 text-xl">
            <span>Live Demo</span>
            <FaPlay className="mt-1 ml-1 text-xl" />
          </a>
          <a href="https://github.com/Booze33/ai_podcast" target="_blank" rel="noreferrer" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:ml-4 my-4 text-xl">
            <span>Get Code</span>
            <FaGithub className="mt-1 ml-1" />
          </a>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Podcastr