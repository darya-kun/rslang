import React, { useState } from 'react';
import DictionaryGameLinks from '../DictionaryGameLinks/DictionaryGameLinks';
import DictionaryPagination from '../DictionaryPagination/DictionaryPagination';
import DictionaryCardsContainer from '../DictionaryCardsContainer/DictionaryCardsContainer';
import './dictionaryPage.css';
//import { useParams } from 'react-router-dom';

const DictionaryPage = ({id}) => {
  //const params = useParams();
  //const current = params.id;
 
  const [numberPage, setNumberPage] = useState(1);

  const changeNextPage = () => {
    setNumberPage(numberPage === 30 ? 30 : numberPage + 1)

  }
  const changePrevPage = () => {
    setNumberPage(numberPage === 1 ? 1 : numberPage - 1)
  }

  return (
    <div className='container'>
      <section className="dictionary-page section">
        <h2 className='title_section'>Учебник</h2>
        <DictionaryGameLinks />
        <DictionaryPagination
          numberPage={numberPage}
          changeNextPage={changeNextPage}
          changePrevPage={changePrevPage}
        />
        <DictionaryCardsContainer numberPage={numberPage}/>
      </section>
    </div>
  )
}

export default DictionaryPage;