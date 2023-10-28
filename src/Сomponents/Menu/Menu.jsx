import React from "react";
import img20 from "../../img/loginacc.svg"


export default function Menu() {
  return (
    <div className="for-flex2">
      <div className="menu">
        <div className="img">
          <img src={img20} alt=""></img>
        </div>
        <div className="email">
          <input
            type="email"
            placeholder="Введите свою электронную почту"
            className="stylish stylish2"
          ></input>
        </div>
        <div className="login">
          <input
            type="text"
            placeholder="Придумайте логин"
            className="stylish stylish2"
          ></input>
        </div>
        <div class="register">
          <input
            type="password"
            placeholder="Придумайте пароль"
            className="stylish stylish2"
          ></input>
        </div>
        <div className="register">
          <input
            type="password"
            placeholder="Повторите пароль"
            className="stylish stylish2"
          ></input>
        </div>
        <div className="button">
          <button className="registerButton" type="submit">
            Зарегистрироваться
          </button>
        </div>
        <div className="forgot">
          <button className="anyprobs">Уже есть аккаунт? Войти</button>
        </div>
      </div>
    </div>
  );
}
