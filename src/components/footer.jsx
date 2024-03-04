import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from '../features/logo'

const Footer = () => {
  return (
    <div className="flex flex-col w-screen h-footer dark:bg-footer-dark bg-footer-light text-dark dark:text-light-2 justify-center items-center">
      <div className="flex flex-row">
        <Logo />
        <h1 className="text-5xl font-cursive">Tebe Tisloh</h1>
      </div>
      <p className="text-center text-xl font-curved">ttisloh[at]gmail[dot]com</p>
      <div className="flex justify-around mt-4">
        <FaLinkedinIn className="text-xl mx-4" />
        <FaGithub className="text-xl mx-4" />
        <FaXTwitter className="text-xl mx-4" />
      </div>
      <p className="mt-8 text-gray-500 font-curved">Copyright © 2023 Tebe Tisloh</p>
    </div>
  )
}

export default Footer;