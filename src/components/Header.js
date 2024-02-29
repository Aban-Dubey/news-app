import React from 'react';
import Logo from "../assets/logo.png";
import './header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" className="logo" />
      <Link to="/" className="home-link">Home</Link>
      <Link to="/fashion" className="fashion-link">Fashion</Link>
      <Link to="/cricket" className="cricket-link">Cricket</Link>
      <Link to="/politics" className="cricket-link">Politics</Link>
    </header>
  );
};
