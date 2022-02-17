import React from 'react';
// import { Link } from 'react-router-dom';

import './DictionaryPagination.css';

const DictionaryPagination = ({postsPerPage, totalPosts, paginate, changeNextPage, changePrevPage}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

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
          <ul className='pagination__list'>
            {pageNumbers.map(number => (
              <li className='pagination__item' key={number}>
                <button className='button_pagination' type='button'
                        onClick={() => paginate(number)}>
                  {number}
                </button>
              </li>
            ))}
          </ul>
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