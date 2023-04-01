import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
          <div className="navbar-container">
            <Link to="/" className="navbar-brand">
              Publications
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/posts">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/comments">Detail Page</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  
  export default Navbar;