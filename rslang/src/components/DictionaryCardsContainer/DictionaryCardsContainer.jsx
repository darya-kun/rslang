import React, { useState, useEffect } from 'react';
import Service from '../Api/Api';
import DictionaryCard from '../DictionaryCard/DictionaryCard';
import './dictionaryCardsContainer.css';
import { useParams } from 'react-router-dom';

const DictionaryCardsContainer = ({numberPage}) => {
  const params = useParams();
  const current = params.id;
  const temp = new Service();
  const [posts, setPosts] = useState([]);

  async function fetchData() {
      const res = await temp.getChunkWords(current, numberPage.toString());
      setPosts(res);
  }

  useEffect(() => {
    fetchData();
  }, [numberPage]);

  const arr = Array.from(posts);
  let elements = arr.map((item) =>
    <div key={item.id}>
      <DictionaryCard item={item} />
    </div>
  )

  return (
        <div className="dictionary__container dictionary__container_cards">
          {elements}
        </div>
  )
}

export default DictionaryCardsContainer;