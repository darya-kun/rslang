import React from 'react';
import './Sprint.css'

export default function Sprint() {
  return (
    <div className="container">
      <section className='sprint section'>
        <div className='game'>
        <div className='sprint__content'>
          <div className='sprint__timer'>
            <svg className='timer-icon' focusable='false' viewBox='0 0 24 24' aria-hidden='true'>
              <path d='M22 5.7l-4.6-3.9-1.3 1.5 4.6 3.9L22 5.7zM7.9 3.4L6.6 1.9 2 5.7l1.3 1.5 4.6-3.8zM12.5 8H11v6l4.7 2.9.8-1.2-4-2.4V8zM12 4c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z'></path>
            </svg>
            <span className='counter'>1</span>
          </div>
          <div className='sprint__stat'>
            <div className='sprint__score'>Очки: 0</div>
          </div>
        </div>
        <div className='sprint__words'>
          <h2 className='sprint__word sprint__word_en'>accident</h2>
          <h3 className='sprint__word sprint__word_ru'>несчастный случай</h3>
        </div>
        <div className='sprint__buttons'>
          <button className='sprint__button sprint__button-true' type='button' id='0'>
            <span>
            <svg className="sprint__button-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
            </svg>
            </span>
            ВЕРНО
          </button>
          <button className='sprint__button sprint__button-false' type='button' id='1'>
            <span>
              НЕВЕРНО
              <span>
              <svg className="sprint__button-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
              </svg>
              </span>
            </span>
          </button>
        </div>
        </div>
    </section>
  </div>
)
}