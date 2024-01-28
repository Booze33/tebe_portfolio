import { useState } from 'react';
import { Link } from 'react-router-dom';
import Theme from "../features/theme";
import Logo from '../features/logo'
import '../assets/stylesheet/nav.css'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      <div className="fixed top-top left-left w-screen flex flex-row pt-8 pl-8 mb-12 justify-between items-center h-20 border-b-2 dark:border-indigo-200 border-indigo-950 dark:bg-dark bg-light z-20">
        <Logo className="ml-16 dark:text-dark text-light" />
        <div className="flex-row justify-between duration-100 hidden md:flex bg:light w-display">
          <div className="left-96 duration-100 hidden md:block">
            <Link className="mr-4 text-2xl" to="/">Portfolio</Link>
            <Link className="ml-2 text-2xl" to="/about">About</Link>
          </div>
          <Theme className="duration-100 hidden md:block mr-12" />
        </div>

        <nav className="menu-nav m-1 md:hidden">
          <button
          className={`hamburger ${isActive ? 'is-active' : ''}`}
          onClick={handleClick}
        >
            <div className="bar" />
          </button>
        </nav>
      </div>
      <div className={`mobile-nav ${isActive ? 'is-active' : ''}`}>
        <a className="my-2 z-10 text-3xl" href="#">Portfolio</a>
        <a className="mt-2 z-10 mb-12 text-3xl" href="#">About</a>
        <Theme />
      </div>
    </>
  )
}

export default Navbar;