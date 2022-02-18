import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './registration.css';

const createUser = async user => {
  const rawResponse = await fetch('https://rs-lang-gowteam.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    token: null,
    body: JSON.stringify(user)
  });
};

const Registration = () => {
    const [fName, setfName] = useState("");
    const [fEmail, setfEmail] = useState('');
    const [fPassword, setfPassword] = useState(``);
    const navigate = useNavigate();
    const onSubmit = async (event) => {
      try{
        event.preventDefault();
        let inputsValue = {"name": fName, "email": fEmail, "password": fPassword};
        const response = await createUser(inputsValue);
        return response;
      } catch(error) {
        throw new Error('Erorr with authorization');
      }
  };

  return (
    <div className="registration">
      <div>
        <form className="loginForm" onSubmit={onSubmit}>
          Регистрация
          <br/>
          Как зовут нашего котика: <input placeholder='Имя' type="text" name="name" onChange={e => setfName(e.target.value)}></input>
          <br/>
          Введите почту: <input placeholder='johndoe@mail.com' type="text" name="email" onChange={e => setfEmail(e.target.value)}></input>
          <br/>
          Придумайте пароль: <input placeholder='пароль' type="password" name="password" onChange={e => setfPassword(e.target.value)}></input>
          <br/>
          <input type="submit" value="Отправить"/>
        </form>
        <div>
          Есть у тебя уже есть логин{' '}
          <Link to='/authorization' className='login-link'>
            Зайди
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Registration;