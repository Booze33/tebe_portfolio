import { useState } from 'react';
import '../assets/stylesheet/message.css';

const Message = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

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
        <h1>Tisloh</h1>
      </div>
    </>
  )
}

export default Message;