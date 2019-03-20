import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => (
  <div className="header">
    <p>this is the header</p>
    <ul>
      <li>
        <Link to="/">Landing</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/footer">Footer</Link>
      </li>
      <li> <Link to="/nav">Nav</Link>
      </li>
    </ul>
  </div>
);

export default Header;
