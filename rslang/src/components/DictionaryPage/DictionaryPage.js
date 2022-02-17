import React, {useState, useEffect} from 'react';
import Service from '../Api/Api';
import DictionaryCard from '../DictionaryCard/DictionaryCard';
import DictionaryGameLinks from '../DictionaryGameLinks/DictionaryGameLinks';
import DictionaryPagination from '../DictionaryPagination/DictionaryPagination';
import './dictionaryPage.css';

const DictionaryPage = () => {
  const temp = new Service();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect( () => { 
    async function fetchData() {
        try {
          const res = await temp.getChunkWords('1', '5');
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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = elements.slice(firstPostIndex, lastPostIndex);

  /**
   * Функция пагинации - переключения страниц после клика по номеру страницы
   * @param {number} pageNumber 
   */
  const paginate = pageNumber => setCurrentPage(pageNumber);

  /**
   * Функция переключения страниц после клика по кнопке Следующая
   */
  const changeNextPage = () => {
    setCurrentPage(pageNumber =>
      pageNumber === Math.ceil(elements.length / postsPerPage) ?
      pageNumber : pageNumber + 1);
  }

  /**
   * Функция переключения страниц после клика по кнопке Предыдущая
   */
  const changePrevPage = () => {
    setCurrentPage(pageNumber => 
      pageNumber === 1 ? 1 : pageNumber - 1);
  }

  return (
    <div className='container'>
      <section className="dictionary-page section">
        <h2 className='title_section'>Учебник</h2>
        <DictionaryGameLinks />
        <DictionaryPagination 
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          changeNextPage={changeNextPage}
          changePrevPage={changePrevPage}
        />
        <div className="dictionary__container dictionary__container_cards">
          {currentPost}
        </div>
      </section>
    </div>
    )
}

export default DictionaryPage;