import React from 'react'
import img5 from '../../img/exclaim.svg'
import img6 from '../../img/Group27.png'
import img7 from '../../img/Group28.png'
import img8 from '../../img/Group29.png'
import img9 from '../../img/Group30.png'
import img10 from '../../img/hand.png'


export default function Popular() {
  return (
    <section className="mostpopular">
        <div className="container">
            <p className="text-title"><img src={img5} alt=""></img><span className="innerText">Популярнее всего</span></p>
            <div className="container wrapper">
                <div className="parfl">
                    <div className="fl">
                        <a href="#" className="photo">
                            <img src={img6} alt=""></img>
                            <p className="price">10.99 $</p>
                        </a>
                    </div>
                    <div className="fl">
                        <a href="#" className="photo">
                            <img src={img7} alt=""></img>
                            <p className="price">13.99 $</p>
                        </a>
                    </div>
                    <div className="fl">
                        <a href="#" className="photo">
                            <img src={img8} alt=""></img>
                            <p className="price">59.99 $</p>
                        </a>
                    </div>
                    <div className="fl">
                        <a href="#" className="photo">
                            <img src={img9} alt=""></img>
                            <p className="price">59.99 $</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="discounts">
            <div className="container flexing">
                <img className="hand" src={img10} alt=""></img>
                <div className="wrap">
                    <p className="joystick">Купи у нас любую игру и получи джостик в подарок!</p>
                    <p className="lasting">Акция действует с 09.07.2023 до 10.07.2023</p>
                </div>
            </div>
        </div>
    </section>
  )
}
