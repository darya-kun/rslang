import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer__wrapper">
          <a className="github" href="https://github.com/darya-kun">darya-kun</a>
          <a className="github" href="https://github.com/AlionaMu">AlionaMu</a>
          <a className="github" href="https://github.com/kolyamoloko">kolyamoloko</a>
          <a className="rss" href="https://rs.school/js/">
            <span className="rss-year">'2022</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
