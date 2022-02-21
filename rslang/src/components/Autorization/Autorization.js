import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './autorization.css';


const signIn = async user => {
  const response = await fetch('https://rs-lang-gowteam.herokuapp.com/signin', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  });
  const content = await response.json();
  return content;
};
const Autorization = () => {
  const [fEmail, setfEmail] = useState('');
  const [fPassword, setfPassword] = useState(``);
  const navigate = useNavigate();
  const submit = async (event) => {
    event.preventDefault();
    let inputsValue = { "email": fEmail, "password": fPassword };
    const response = await signIn(inputsValue);
    if (response) {
      alert('Вы авторизованы');
      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.userId);
      localStorage.setItem('name', response.name);
      navigate('/')
    } else {
      alert('Неверно введены данные.')
    }
  }

  return (
    <div className="autorization">
      <div>
        <form className="loginForm" onSubmit={submit}>
          Зайти
          <br />
          Введите почту: <input type="text" name="email" onChange={e => setfEmail(e.target.value)}></input>
          <br />
          Введите пароль: <input type="password" name="password" onChange={e => setfPassword(e.target.value)}></input>
          <br />
          <input type="submit" value="Login" />
        </form>
        <p>Ты впервый раз? Тогда <Link to='/registration'>ЗАРЕГИСТРИРУЙСЯ.</Link></p>
      </div>
    </div>
  )
}

export default Autorization;
