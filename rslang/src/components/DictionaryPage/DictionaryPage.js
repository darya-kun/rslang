import React, {useState, useEffect} from 'react';
import Service from '../Api/Api';
import DictionaryCard from '../DictionaryCard/DictionaryCard';
import DictionaryGameLinks from '../DictionaryGameLinks/DictionaryGameLinks';
import DictionaryPagination from '../DictionaryPagination/DictionaryPagination';
import './dictionaryPage.css';
import {useParams} from 'react-router-dom';

const DictionaryPage = () => {
  const params = useParams();
  const current = params.id;
  const temp = new Service();
  const [posts, setPosts] = useState([]);
  const [numberPage, setNumberPage] = useState(1);

  const changeNextPage = () => {
    setNumberPage(numberPage === 30 ? 30 : numberPage + 1)
  }
  const changePrevPage = () => {
    setNumberPage(numberPage === 1 ? 1 : numberPage - 1)
  }
  useEffect(() => { 
    async function fetchData() {
        try {
          const res = await temp.getChunkWords( current, numberPage.toString());
          setPosts(res);
        } catch (err) {
            console.log(err);
        }
      }
        fetchData();
      });

  const arr = Array.from(posts);
  let elements = arr.map((item) => 
    <div key={item.id}>
      <DictionaryCard item={item}/>
    </div>
  )

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
        <div className="dictionary__container dictionary__container_cards">
          {elements}
        </div>
      </section>
    </div>
    )
}

export default DictionaryPage;