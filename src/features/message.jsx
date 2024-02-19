import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
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
      <button className="fixed bottom-6 bg-both w-20 h-20 rounded-full" onClick={handleClick}>
      <lord-icon
        src="https://cdn.lordicon.com/fdxqrdfe.json"
        trigger="hover"
        colors="primary:#030637"
        className="w-28 h-28"
        />
      </button>
      <div className={`mobile-nav ${isActive ? 'is-active' : ''}`}>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
      </div>
    </>
  )
}

export default Message;