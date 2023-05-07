// create a new component called Footer
import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="App-footer">
        <ul className="footer-links">
          <li><a href="/" rel="noopener noreferrer">Home</a></li>
          <li><a href="privacy.html" rel="noopener noreferrer">Privacy Policy</a></li>
          <li><a href="terms-of-service.html" rel="noopener noreferrer">Terms of Service</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
