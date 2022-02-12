import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <a className="github" href="https://github.com">GitHub-1</a>
        <a className="github" href="https://github.com">GitHub-2</a>
        <a className="github" href="https://github.com">GitHub-3</a>
        <a className="rss" href="https://rs.school/js/">
          <span className="rss-year">'2022</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer;
