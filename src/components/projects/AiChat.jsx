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
    <div>
      
    </div>
  )
}

export default AiChat
