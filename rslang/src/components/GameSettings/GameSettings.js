import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import './GameSettings.css';

const GameSettings = () => {
  return (
    <div className="game-settings">
        <div className="game-settings__button">
          <Link to='/games'>
            <svg className="game-settings__icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </Link>
        </div>
      <div className="game-settings__button button_fullscreen">
        <svg className="game-settings__icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path>
        </svg>
      </div>
      <div className="game-settings__button">
        <svg className="game-settings__icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
        </svg>
      </div>
    </div>
  );
}

export default GameSettings;