import React, {useState, useEffect} from 'react';
import Service from '../Api/Api';
import DictionaryCard from '../DictionaryCard/DictionaryCard';
import DictionaryGameLinks from '../DictionaryGameLinks/DictionaryGameLinks';
import './dictionaryPage.css';
import {useParams} from 'react-router-dom';

const DictionaryPage = () => {
  const params = useParams();
  const current = params.id;
  const temp = new Service();
  const [posts, setPosts] = useState([]);

  useEffect( () => { 
    async function fetchData() {
        try {
          const res = await temp.getChunkWords( current, '5');
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
        <div className="dictionary__container dictionary__container_cards">
          {elements}
        </div>
      </section>
    </div>
    )
}

export default DictionaryPage;