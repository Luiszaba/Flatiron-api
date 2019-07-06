import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
        <ol>
            <p><NavLink to="/">Today's Topic</NavLink></p>
            <p><NavLink to="/song_input">Song Input</NavLink></p>
            <p><NavLink to="/comment_input">Comments Input</NavLink></p>
        </ol>
    </div>
  );
};

export default NavBar;