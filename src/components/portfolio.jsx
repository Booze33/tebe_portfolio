import React from 'react';
import Footer from './footer';
import Boxes from '../features/boxes';
import { Link } from 'react-router-dom';
import { TbCircleFilled } from "react-icons/tb";
import { MdFileDownload } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import image from '../assets/images/e-commerce.png';
import expense from '../assets/images/expense.png';
import recipe from '../assets/images/recipe.png';
import book from '../assets/images/book.png';
import weather from '../assets/images/weather.png';
import todo from '../assets/images/todo.png';
import oop from '../assets/images/oop.png';
import pokemon from '../assets/images/pokemon.png';

const Portfolio = () => {

  return (
    <div className="w-screen h-full">
      <div className="sm:px-12 px-6 mt-12 flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-7xl text-center sm:w-display w-feature font-curved z-20">Tebe Tisloh</h1>
        <h1 className="text-4xl sm:text-7xl text-center sm:w-display w-feature font-curved z-20">I am glad you're here.</h1>

        <Boxes />
      </div>
      <section className="sm:px-28 px-6 mt-32 w-screen pt-32 flex flex-col rounded-t-top dark:bg-dark-2 bg-light-2">
        <h1 className="text-3xl sm:text-5xl mb-4 font-curved text-both">Featured Projects</h1>
        <div className="flex flex-col sm:flex-row justify-between">
          <p className="sm:w-input">I've been working as a developer for the last 2 years across user experience, interaction design, and visual design. My strength is strategic product thinking across systems and organizations. Outside of “work-work," I love designing side projects, some of which are shown here.</p>
          <div className="flex flex-col">
            <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-3 flex flex-row text-end justify-end">
              <TbCircleFilled className="mt-1" />
              <span> Solo Project</span>
            </h3>
            <h3 className="bg-pink-200 text-rose-800 py-1 px-2 rounded-2xl flex flex-row w-48">
              <TbCircleFilled className="mt-1" />
              <span> Collaborative Project</span>
            </h3>
          </div>
        </div>
        <div className="w-full flex flex-col justify-around sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:gap-x-4 sm:gap-y-4 my-24">
          <Link to="/" className="col-start-1 col-end-3 row-span-1 my-9 sm:mb-12">
            <img src={image} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl" />
            <h3 className="bg-pink-200 text-rose-800 py-1 px-2 rounded-2xl flex flex-row w-48 my-6">
              <TbCircleFilled className="mt-1" />
              <span> Collaborative Project</span>
            </h3>
            <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Land Rover: E-Commerce</h2>
            <p className="font-curved text-justify w-nine">Make reservations for the rovers. Find the rover that fits your taste and go for a test drive.</p>
          </Link>
          <Link to="/" className="col-span-1 row-start-2 my-9 sm:mb-8">
            <img src={expense} alt="Description" className="w-large sm:w-small sm:h-small h-tiny rounded-3xl" />
            <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-6 flex flex-row text-end justify-end">
              <TbCircleFilled className="mt-1" />
              <span> Solo Project</span>
            </h3>
            <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Expense Tracker</h2>
            <p className="font-curved text-justify w-nine">A budget app to track spending by categories like 'Food' or 'Transport,' helping you manage your expenses effortlessly.</p>
          </Link>
          <Link to="/" className="col-span-1 row-start-2 my-9 sm:mb-8">
            <img src={recipe} alt="Description" className="w-large sm:w-small sm:h-small h-tiny rounded-3xl" />
            <h3 className="bg-pink-200 text-rose-800 py-1 px-2 rounded-2xl flex flex-row w-48 my-6">
              <TbCircleFilled className="mt-1" />
              <span> Collaborative Project</span>
            </h3>
            <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Social Recipe</h2>
            <p className="font-curved text-justify w-nine">Create new food recipes and share them online. You can choose to make them private and can generate a shopping list for the recipes.</p>
          </Link>
          <Link to="/" className="col-start-1 col-end-3 row-start-3 my-9 sm:mb-12">
            <img src={book} alt="Description" className="w-large sm:w-image sm:h-large h-tiny rounded-3xl" />
            <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-6 flex flex-row text-end justify-end">
              <TbCircleFilled className="mt-1" />
              <span> Solo Project</span>
            </h3>
            <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Online BookStore</h2>
            <p className="font-curved text-justify w-nine">This app will allow you to log the books you start, record your current page numbers as you read, and mark books as finished when completed. Stay organized and monitor your reading habits and pace.</p>
          </Link>
        </div>
        <div>
          <h1 className="text-2xl sm:text-4xl font-curved text-both">Other Projects</h1>
          <p className="font-curved text-justify">Smaller projects that I worked on.</p>
          <div className="mt-8">
            <a href="#" className="flex flex-row my-4">
              <img src={pokemon} alt="description" className="w-img h-img sm:w-img2 sm:h-img2 rounded-2xl" />
              <div className="ml-3 sm:ml-5">
                <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Pokemon Cards</h2>
                <p className="font-curved text-justify text-sm sm:text-xl">Smaller projects that I worked on.</p>
              </div>
            </a>
            <a href="#" className="flex flex-row my-4">
              <img src={weather} alt="description" className="w-img h-img sm:w-img2 sm:h-img2 rounded-2xl" />
              <div className="ml-3 sm:ml-5">
                <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Weather</h2>
                <p className="font-curved text-justify text-sm sm:text-xl">Detailed forecasts, and a wealth of pertinent information for cities worldwide.</p>
              </div>
            </a>
            <a href="#" className="flex flex-row my-4">
              <img src={todo} alt="description" className="w-img h-img sm:w-img2 sm:h-img2 rounded-2xl" />
              <div className="ml-3 sm:ml-5">
                <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">To-do List</h2>
                <p className="font-curved text-justify text-sm sm:text-xl">Smaller projects that I worked on.</p>
              </div>
            </a>
            <a href="#" className="flex flex-row my-4">
              <img src={oop} alt="description" className="w-img h-img sm:w-img2 sm:h-img2 rounded-2xl" />
              <div className="ml-3 sm:ml-5">
                <h2 className="text-2xl sm:text-3xl mb-2 font-curved text-both">Backend_Library</h2>
                <p className="font-curved text-justify text-sm sm:text-xl">Smaller projects that I worked on.</p>
              </div>
            </a>
            
          </div>
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <button className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:mx-2 my-2 text-xl">
              <span>Get Resume</span>
              <MdFileDownload className="mt-1 text-2xl" />
            </button>
            <Link to="/about" className="flex flex-row py-2 px-4 rounded-2xl dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 border-[#9290C3] border-x-2 border-t-2 border-b-4 sm:ml-4 my-4 text-xl">
              <span>About Me</span>
              <FaPerson className="mt-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
