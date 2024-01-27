import Footer from './footer';
import { Link } from 'react-router-dom';
import { MdFileDownload } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import Tech from './tech';

const About = () => {
  return (
    <div className="w-screen h-full mt-4 pt-12">
      <div className="sm:px-12 px-6 mt-12 flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-7xl text-center sm:w-display w-feature font-curved z-20">About Me</h1>
      </div>
      <section className="mt-4 w-screen px-side flex flex-col ">
        <h2 className="text-xl mb-2 font-curved text-both">In a nutshell</h2>
        <p>Hi there, I'm Tebe! I am a professional software developer who is always available to render services to clients🤝. I am passionate about coding and happy to be joining the world of programming✨.</p>

        <h2 className="text-xl mt-12 mb-2 font-curved text-both">Professional life</h2>
        <p className="mb-2">My  journey began at Microverse, where honed my skills through hands-on experience in pair programming and real-world project development. I've crafted a diverse portfolio of projects, showcasing my expertise in frontend and backend development.</p>
        <p className="my-2">Throughout My career, I have cultivated a strong commitment to delivering high-quality software on time and within budget. Efficiency and reliability are core strengths that set I apart in the dynamic field of software development. I excel in collaborative environments and have a proven track record of seamless teamwork with fellow developers, fostering a productive and positive work culture.</p>
        <p className="my-2">With a deep passion for programming and a continuous drive for learning and self-improvement, I am excited to take on new challenges and contribute my skills and expertise to innovative projects. I look forward to the opportunity to discuss how my diverse skill set and experience can benefit organizations in need of talented and dedicated software developers.</p>

        <h2 className="text-xl mt-12 mb-2 font-curved text-both">Personal life</h2>
        <p className="mb-2">When I’m not programming, I like to play football, tennis, and pick up new and increasingly complicated creative hobbies. </p>
        <p className="my-2">Alongside My software development pursuits, I am also an aerospace student at the prestigious Warsaw University of Technology, where I am actively pursuing my other passion. My diverse academic background not only broadens my knowledge base but also cultivates a unique perspective that I can bring to my software development endeavors.</p>
        <p className="my-2">I’ve been passionate about development for many years, and have been grateful to grow in the programming world and also develop many projects as a I continue to learn.</p>

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
        <Tech />
      </section>
      <Footer />
    </div>
  )
}

export default About;
