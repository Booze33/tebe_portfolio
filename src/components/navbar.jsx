import { useState } from 'react';
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
      <div className="flex flex-row mt-0 pt-8 pl-8 justify-between items-center h-20 border-b-2 dark:border-indigo-200 border-indigo-950">
        <Logo className="ml-16 dark:text-dark text-light" />
        <div className="flex-row justify-between duration-100 hidden md:flex bg:light w-display">
          <div className="left-96 duration-100 hidden md:block">
            <a className="mx-2 text-xl" href="#">Portfolio</a>
            <a className="mx-2 text-xl" href="#">About</a>
          </div>
          <Theme className="duration-100 hidden md:block" />
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