import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
        <ol>
            <p><NavLink to="/">Home</NavLink></p>
            <p><NavLink to="/songs">Songs</NavLink></p>
            <p><NavLink to="/song_input">Song Input</NavLink></p>
            <p><NavLink to="/comment_input">Comments Input</NavLink></p>
        </ol>
    </div>
  );
};

export default NavBar;