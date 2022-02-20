import React from 'react';
// import { Link } from 'react-router-dom';

import './DictionaryPagination.css';

const DictionaryPagination = ({changeNextPage, changePrevPage, numberPage}) => {
  return (
    <div className='dictionary-pagination'>
      <div className='dictionary-pagination__container'>
        <nav className='pagination'>
          <button className='button_pagination'
                  onClick={() => changePrevPage()}>
            <svg className="pagination__icon pagination__icon_prev" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </svg>
          </button>
          <p className='pagination__list'>{numberPage.toString()}</p>
          <button className='button_pagination'
                  onClick={() => changeNextPage()}>
            <svg className="pagination__icon pagination__icon_next" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
          </button>
        </nav>
      </div>
    </div>
  )


}

export default DictionaryPagination;