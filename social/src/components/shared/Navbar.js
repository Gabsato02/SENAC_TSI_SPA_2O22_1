import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
      <div className="container align-items-center">
        <Link to="/" className="navbar-brand">
          Senacgram
        </Link>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/explorar">
              Explorar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
