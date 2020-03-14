import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <div>
          <h1 className="main-heading">
            React Chat Application
            <span role="img" aria-label="emoji"></span>
          </h1>
          <div className="icons">
            <FaReact size="80" color="#00d8ff" />{" "}
            <MdChat color="#fff" size="80" />
          </div>
        </div>
        <h2 className="heading">Join</h2>
        <div>
          <input
            placeholder="Your name..."
            className="joinInput"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room name..."
            className="joinInput mt-20"
            type="text"
            onChange={e => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat/?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
