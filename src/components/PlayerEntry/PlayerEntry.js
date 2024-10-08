import React, { useState } from "react";

import './index.css'


const PlayerEntry = ({ onSubmit }) => {
  const [playerName, setPlayerName] = useState("");

  const handleSubmit = () => {
    if (playerName) {
      onSubmit(playerName);
    }
  };

  return (
    <div className="card-container">
     <h2 className="heading">Enter Your Name</h2>
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Enter your name"
        className="input-style"
      />
      <button className="btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PlayerEntry;
