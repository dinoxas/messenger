import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineWechat } from 'react-icons/ai';
import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <div>
          <h1 className='main-heading'>
            Messenger
            <span role='img' aria-label='emoji'></span>
          </h1>
          <div className='icons'>
            <AiOutlineWechat size='90' color='#b39ddb' />{' '}
          </div>
        </div>
        <h2 className='heading'>Join a chat now</h2>
        <div>
          <input
            placeholder='Your name...'
            className='joinInput'
            type='text'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='Room name...'
            className='joinInput mt-20'
            type='text'
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat/?name=${name}&room=${room}`}
        >
          <button className='button mt-20' type='submit'>
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
