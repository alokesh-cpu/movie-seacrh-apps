import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav >
        <h3>Movie Search</h3>
        <ul className="nav-links">
            <Link to='/home'>
                <li>Home</li>
            </Link>
            <Link to="/favourites">
            <li>Favoutites</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
