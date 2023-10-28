import React from 'react'
import img1 from '../../img/gamepad.svg'
import img2 from '../../img/Search.svg'
import img3 from '../../img/Account.svg'
import img4 from '../../img/rubber.png'
import Menu from '../Menu/Menu'

export default function Header() {
    function returnMenu(){
        return (<Menu/>)
    }
  return (
    <header>
        <div className="container">
            <div className="nav">
                <a href="index.html" className="logo flex">
                    <img className="img-logo" src={img1} alt="gamepad"></img><span className="logo-text">BuyGames</span>
                </a>
                <div className="links">
                    <a className="link" href="#">PS</a>
                    <a className="link" href="#">XBOX</a>
                </div>
                <div className="svg">
                    <button href="#" className="searchBtn"><img src={img2} alt="searchimg"></img></button>
                    <div className="search-block"><input type="text" className="searchInp"></input><button className="closeBtn"><img className="rubber" src={img4} alt="img"></img></button></div>
                    <div className="account-block"><button onClick={returnMenu} className="menuBtn"><img src={img3} alt="accountimg"></img></button></div>
                </div>
            </div>
        </div>
    </header>
  )
}
