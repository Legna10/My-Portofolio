import React, { useState } from 'react';
import './Navbar.css';
import light from '@/assets/light_mode.svg';
import dark from '@/assets/dark_mode.svg';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ theme, setTheme }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const themes = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div className="navbar">
      <h1><Link to="/about">Anggela Felayni</Link></h1>

      <div className={`nav-links ${open ? 'active' : ''}`}>
        <ul>
          <li>
            <HashLink smooth to="/about#aboutme" onClick={() => setOpen(false)}>
              About Me
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/about#skillsntools" onClick={() => setOpen(false)}>
              Skills and Tools
            </HashLink>
          </li>
          <li>
            <Link to="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/certificates" onClick={() => setOpen(false)}>
              Certificates
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
        <div className="navbar-actions">
        <img
          onClick={themes}
          src={theme === 'light' ? dark : light}
          alt="Toggle theme"
          className={`themes ${theme === 'dark' ? 'invert' : ''}`}
        />
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>  
    </div>
  );
};

export default Navbar;
