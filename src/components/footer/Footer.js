import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3 ">
            <li className="nav-item"><Link to="/home" className="nav-link px-2 text-muted">Home</Link></li>
            <li className="nav-item"><Link to="/places" className="nav-link px-2 text-muted">Places</Link></li>
            <li className="nav-item"><Link to="/login" className="nav-link px-2 text-muted">Login</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link px-2 text-muted">About</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-muted">Contact Us</Link></li>
          </ul>
          <p className="text-center text-muted">© 2021 Travel BD</p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;