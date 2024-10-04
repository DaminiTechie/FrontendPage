import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>TechyStar</h1>
        <p>@All rights reserved</p>
      </div>
      <div>
        <h5>Follow us</h5>
        <div className="social-links">
          <Link to="#">Youtube</Link>
          <Link to="#">Instagram</Link>
          <Link to="#">Github</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
