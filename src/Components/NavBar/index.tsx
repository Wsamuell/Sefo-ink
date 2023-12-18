import React from 'react';
import logo from '../../assets/sefo-logo.png';
import './index.css';
import { FaFacebook, FaPinterest } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { CiInstagram } from 'react-icons/ci';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="Nav-container">
      <img src={logo} className="App-logo" alt="logo" />
      <ul className="Nav-list">
        <li>Home</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact Us</li>
      </ul>

      <div className="Icon-list">
        <FaFacebook />
        <FaXTwitter />
        <CiInstagram />
        <FaPinterest />
      </div>
    </div>
  );
};

export default NavBar;
