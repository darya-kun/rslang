import React from 'react';
import Burger from '../Burger/Burger';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import clearStorageFromAudiocallData from '../../utils/clearStorageFromAudiocallData';
import './header.css';

const Header = ({togglePopMenu}) => {
  const { setTheme } = ThemeSwitcher();

  const handleLightThemeClick = () => {
    setTheme('light');
  }

  const handleDarkThemeClick = () => {
    setTheme('dark');
  }
  const name = localStorage.getItem('name');
  return (
    <header className='header'>
      <div className="container">
        <div className="header__wrapper">
          <Burger togglePopMenu={togglePopMenu}/>
          <div className="theme-switcher">
            <div className="theme-switcher__wrapper" aria-label="Theme toggle">
              <button className="button_theme button_theme-light" variant="secondary" onClick={handleLightThemeClick}>
                <i className="theme-switcher__icon theme-switcher__icon_light fas fa-sun"></i>
              </button>
              <span className="theme-switcher__line">|</span>
              <button className="button_theme button_theme-dark" variant="secondary" onClick={handleDarkThemeClick}>
                <i className="theme-switcher__icon theme-switcher__icon_dark fas fa-moon"></i>
              </button>
            </div>
          </div>
          <Link className="title-link" to="/">
            <h1 className="title" onClick={clearStorageFromAudiocallData}>RS-Lang</h1>
          </Link>
          <button className="header__button button" >{name ? name : <Link to='/registration'>Войти</Link>}</button>
        </div>
      </div>
    </header>
  )
}

export default Header;