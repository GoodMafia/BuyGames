import React from "react";
import { useState } from "react";
import img1 from "../../img/gamepad.svg";
import img2 from "../../img/Search.svg";
import img3 from "../../img/Account.svg";
import img4 from "../../img/rubber.png";
import img20 from "../../img/loginacc.svg";

export default function Header() {
  const [flag, setFlag] = useState(false);

  return (
    <header onclick={setFlag(false)}>
      <div className="container">
        <div className="nav">
          <a href="index.html" className="logo flex">
            <img className="img-logo" src={img1} alt="gamepad"></img>
            <span className="logo-text">BuyGames</span>
          </a>
          <div className="links">
            <a className="link" href="#">
              PS
            </a>
            <a className="link" href="#">
              XBOX
            </a>
          </div>
          <div className="svg">
            <button href="#" className="searchBtn">
              <img src={img2} alt="searchimg"></img>
            </button>
            <div className="search-block">
              <input type="text" className="searchInp"></input>
              <button className="closeBtn">
                <img className="rubber" src={img4} alt="img"></img>
              </button>
            </div>
            <div className="account-block">
              <button onClick={setFlag(true)} className="menuBtn">
                <img src={img3} alt="accountimg"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
      {flag && (
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
        </div>)}
    </header>
  );
}
