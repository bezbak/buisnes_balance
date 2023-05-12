import React from 'react'
import "./wheel.scss"
// import wh1 from "../../../../assets/1.png"
// import wh2 from "../../../../assets/2.png"
// import wh3 from "../../../../assets/3.png"
// import wh4 from "../../../../assets/4.png"
export default function Wheel() {
  return (
    <div className='wheel'>
        <div className="container">
            <div className="wheel__inner">
                {/*<div className="wheel__test">
                     <img src={wh1} alt="" />
                    <div className="wheel__side">

                    </div> 
                    <img src={wh2} alt="" />
                    <img src={wh3} alt="" />
                    <img src={wh4} alt="" /> 
                </div>*/}
                <div className="wheel__text">
                    <h2>КОЛЕСО БИЗНЕС-БАЛАНСА</h2>
                    <p>ОТСЛЕДИТЕ СВОИ <b>СЛАБЫЕ ТОЧКИ</b> И ОПРЕДЕЛИТЕ <b>НА КАКИХ СФЕРАХ НЕОБХОДИМО СОСРЕДОТОЧИТЬСЯ ПРЯМО СЕЙЧАС</b>, ЧТОБЫ ДОСТИЧЬ МАКСИМАЛЬНОГО РЕЗУЛЬТАТА</p>
                    <form action="">

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
