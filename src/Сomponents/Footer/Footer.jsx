import React from 'react'
import img11 from '../../img/gamepad.svg'


export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="flexbox">
                <div className="block">
                    <p className="title-footer">Телефон</p>
                    <p className="string">+375(25)510-10-10</p>
                    <p className="string">+375(33)510-10-10</p>
                </div>
                <div className="logotype">
                    <a href="#" className="logo flex">
                        <img className="img-logo" src={img11} alt="gamepad"></img><span className="logo-text">BuyGames</span>
                    </a>
                </div>
                <div className="block">
                    <p className="title-footer">Адрес</p>
                    <p className="string">пр. Победителей 135</p>
                    <p className="string">г. Минск</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
