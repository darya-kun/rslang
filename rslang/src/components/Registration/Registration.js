import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './registration.css'
import service from "../Api/Api";

const Registration = () => {

  const navigate = useNavigate();
  const [inputsValue, setValues] = useState();

  const handleInputName = ({ target }) => {
    setValues({
      ...inputsValue,
      [target.name]: target.value,
    });
  };
  
  const onSubmit = async (event) => {
    event.preventDefault();
    let { name = '', email = '', password = '' } = inputsValue;
    console.log({ name, email, password });
    const result = await service.createUser({ name, email, password });
    result.successful ? navigate('/autorization') : alert(result.errors);
  };

  return (
    <div className="registration">
      <div>
        <form className="loginForm" onSubmit={onSubmit}>
          Регистрация
          <br/>
          Как зовут нашего котика: <input placeholder='Имя' type="text" name="name" onChange={handleInputName}></input>
          <br/>
          Введите почту: <input placeholder='johndoe@mail.com' type="text" name="email" onChange={handleInputName}></input>
          <br/>
          Придумайте пароль: <input placeholder='пароль' type="password" name="password" onChange={handleInputName}></input>
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