import React from 'react';
import Footer from './footer';
import Boxes from '../features/boxes';
import { Link } from 'react-router-dom';
import { TbCircleFilled } from "react-icons/tb";
import image from '../assets/images/e-commerce.png';
import expense from '../assets/images/expense.png';
import recipe from '../assets/images/recipe.png';

const Portfolio = () => {

  return (
    <div className="w-screen h-full">
      <div className="sm:px-12 px-6 mt-12 flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-7xl text-center sm:w-display w-feature font-curved z-20">Tebe Tisloh</h1>
        <h1 className="text-4xl sm:text-7xl text-center sm:w-display w-feature font-curved z-20">I am glad you're here.</h1>

        <Boxes />
      </div>
      <section className="sm:px-32 px-12 mt-32 pt-32 flex flex-col rounded-t-top dark:bg-dark-2 bg-light-2">
        <h1 className="text-3xl sm:text-5xl mb-4 font-curved text-both">Featured Projects</h1>
        <div className="flex flex-col sm:flex-row justify-between">
          <p className="sm:w-input">I've been working as a developer for the last 2 years across user experience, interaction design, and visual design. My strength is strategic product thinking across systems and organizations. Outside of “work-work," I love designing side projects, some of which are shown here.</p>
          <div className="flex flex-col">
            <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-3 flex flex-row text-end justify-end">
              <TbCircleFilled classsName="mt-2" />
              <span> Solo Project</span>
            </h3>
            <h3 className="bg-pink-200 text-rose-800 py-1 px-2 rounded-2xl flex flex-row w-48">
              <TbCircleFilled />
              <span> Collaborative Project</span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 sm:grid-rows-4">
          <Link to="/" className="col-start-1 col-end-3 row-span-1">
            <img src={image} alt="Description" />
            <h3 className="bg-pink-200 text-rose-800 py-1 px-2 rounded-2xl flex flex-row w-48">
              <TbCircleFilled />
              <span> Collaborative Project</span>
            </h3>
            <h2>Land Rover: E-Commerce</h2>
            <p>Make reservations for the rovers. Find the rover that fits your taste and go for a test drive.</p>
          </Link>
          <Link to="/" className="col-span-1 row-start-2">
            <img src={expense} alt="Description" />
            <h3 className="bg-indigo-200 text-indigo-700 py-1 px-2 w-32 rounded-2xl my-3 flex flex-row text-end justify-end">
              <TbCircleFilled classsName="mt-2" />
              <span> Solo Project</span>
            </h3>
            <h2>Expense Tracker</h2>
            <p>A budget app to track spending by categories like 'Food' or 'Transport,' helping you manage your expenses effortlessly.</p>
          </Link>
          <Link to="/" className="col-span-1 row-start-2">
            <img src={recipe} alt="Description" />
            <h3 className="bg-pink-200 text-rose-800 py-1 px-2 rounded-2xl flex flex-row w-48">
              <TbCircleFilled />
              <span> Collaborative Project</span>
            </h3>
            <h2>Social Recipe</h2>
            <p>Create new food recipes and share them online. You can choose to make them private and can generate a shopping list for the recipes.</p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
