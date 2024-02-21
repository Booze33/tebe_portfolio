import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoClose } from "react-icons/io5";
import '../assets/stylesheet/message.css';

const Message = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4beqc1i', 'template_krgk2be', form.current, {
        publicKey: 'd_c1ttLLXIDyzHaIO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <button className="fixed bottom-6 bg-both w-20 h-20 rounded-full sm:right-4" onClick={handleClick}>
        <lord-icon
          src="https://cdn.lordicon.com/fdxqrdfe.json"
          trigger="hover"
          colors="primary:#030637"
          className="w-28 h-28"
        />
      </button>
      <div className={`message-nav ${isActive ? 'is-active' : ''} h-nine w-message rounded-lg dark:bg-dark bg-light duration-500 shadow-lg shadow-black sm:right-8 ml-6`}>
        <div className="flex flex-row justify-around mt-minus2">
          <h1 className="text-lg font-curved text-both">Send feedback</h1>
          <button onClick={handleClick}>
            <IoClose />
          </button>
        </div>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center">
          <label>Name</label>
          <input type="text" name="user_name" className="bg-transparent border pl-2 rounded-lg dark:border-[#fff0f5] border-[#1b1a55]" />
          <label>Email</label>
          <input type="email" name="user_email" className="bg-transparent border pl-2 rounded-lg dark:border-[#fff0f5] border-[#1b1a55]" />
          <label>Message</label>
          <textarea name="message" className="bg-transparent border pl-2 rounded-lg dark:border-[#fff0f5] border-[#1b1a55]" />
          <input type="submit" value="Send" className="bg-both p-2 rounded-3xl mt-2" />
        </form>
      </div>
    </>
  )
}

export default Message;