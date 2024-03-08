import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { MdFileDownload } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import Tech from './tech';

const pathVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      delay: 0.5,
      ease: "easeInOut"
    }
  }
};

const About = () => {
  const scrollRef = useRef(null);

  return (
    <div className="w-screen h-full mt-4 pt-12" ref={scrollRef}>
      <motion.div
        variants={pathVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ root: scrollRef }}
        className="sm:px-12 px-6 mt-12 flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-7xl text-center sm:w-display w-feature font-curved">About Me</h1>
      </motion.div>
      <section className="mt-4 w-screen px-side flex flex-col ">
        <motion.h2
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef }}
          className="text-xl mb-2 font-curved text-both">In a nutshell</motion.h2>
        <motion.p
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef }}
        >Hi there, I'm Tebe! I am a professional software developer who is always available to render services to clients🤝. I am passionate about coding and happy to be joining the world of programming✨.</motion.p>

        <motion.h2 
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef }}
          className="text-xl mt-12 mb-2 font-curved text-both">Professional life</motion.h2>
        <motion.p
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef }}
          className="mb-2">My  journey began at Microverse, where honed my skills through hands-on experience in pair programming and real-world project development. I've crafted a diverse portfolio of projects, showcasing my expertise in frontend and backend development.</motion.p>
        <motion.p
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef }}
          className="my-2">Throughout My career, I have cultivated a strong commitment to delivering high-quality software on time and within budget. Efficiency and reliability are core strengths that set I apart in the dynamic field of software development. I excel in collaborative environments and have a proven track record of seamless teamwork with fellow developers, fostering a productive and positive work culture.</motion.p>
        <motion.p
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef }}
          className="my-2">With a deep passion for programming and a continuous drive for learning and self-improvement, I am excited to take on new challenges and contribute my skills and expertise to innovative projects. I look forward to the opportunity to discuss how my diverse skill set and experience can benefit organizations in need of talented and dedicated software developers.</motion.p>

        <motion.h2 
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef }}
          className="text-xl mt-12 mb-2 font-curved text-both">Personal life</motion.h2>
        <motion.p
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef }}
          className="mb-2">When I’m not programming, I like to play football, tennis, and pick up new and increasingly complicated creative hobbies. </motion.p>
        <motion.p
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef }}
          className="my-2">Alongside My software development pursuits, I am also an aerospace student at the prestigious Warsaw University of Technology, where I am actively pursuing my other passion. My diverse academic background not only broadens my knowledge base but also cultivates a unique perspective that I can bring to my software development endeavors.</motion.p>
        <motion.p
          variants={pathVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ root: scrollRef }}
          className="my-2">I’ve been passionate about development for many years, and have been grateful to grow in the programming world and also develop many projects as a I continue to learn.</motion.p>

        <div className="flex flex-col justify-center items-center w-screen mt-16 sm:ml-ball">
          <h1 className="text-3xl sm:text-5xl mb-minus2 font-curved text-both">Technologies</h1>
          <Tech />
        </div>

        <div className="flex sm:flex-row flex-col justify-center items-center mt-8">
          <button className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:mx-2 my-2 text-xl">
            <span>Get Resume</span>
            <MdFileDownload className="mt-1 text-2xl" />
          </button>
          <Link to="/" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:ml-4 my-4 text-xl">
            <span>Portfolio</span>
            <FaPerson className="mt-1" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About;
