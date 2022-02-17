import React from "react";
import { Link } from 'react-router-dom';
import './autorization.css';

const Autorization = () => {
  return (
    <div className="autorization">
      <div>
        <form className="loginForm">
          Зайти
          <br/>
          Введите почту: <input type="text" name="email"></input>
          <br/>
          Введите пароль: <input type="password" name="password"></input>
          <br/>
          <input type="submit" value="Login"/>
        </form>
        <p>Ты впервый раз? Тогда <Link to='/registration'>зарегистрируйся.</Link></p>
        </div>
    </div>
  )
}

export default Autorization;
