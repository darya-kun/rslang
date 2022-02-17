import React, {useState, useEffect} from 'react';
import Service from '../Api/Api';
import DictionaryCard from '../DictionaryCard/DictionaryCard';
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
      <section className="dictionary-page section">
        <h2 className='title_section'>Учебник</h2>
        <div className='dictionary__icons'></div>
        <div className="dictionary__container">
          {elements} 
        </div>
      </section>
    )
}

export default DictionaryPage;