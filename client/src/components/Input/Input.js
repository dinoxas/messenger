import React from 'react';
import './Input.css';
import { IoIosSend } from 'react-icons/io';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className='form'>
      <input
        className='input'
        type='text'
        placeholder='Type a message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
      />
      <button className='sendButton' onClick={(e) => sendMessage(e)}>
        <IoIosSend size='24' />
      </button>
    </form>
  );
};

export default Input;
