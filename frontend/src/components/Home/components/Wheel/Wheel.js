import React, { useState } from 'react'
import "./wheel.scss"
// import wh1 from "../../../../assets/1.png"
// import wh2 from "../../../../assets/2.png"
// import wh3 from "../../../../assets/3.png"
// import wh4 from "../../../../assets/4.png"
import test from "../../../../assets/test.png"
import close from "../../../../assets/close.svg"
export default function Wheel() {
    const [window, setWindow] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [testing, setTesting] = useState(true);
    
    const proverka = ()=>{
        if (name&&phone&&email) {
            setWindow(!window)
        }
    }
  return (
    <div className='wheel'>
        <div className="container">
            <div className="wheel__inner">
                <div className="wheel__test">
                     <img src={test} alt="" />
                </div>
                <div className="wheel__text">
                    <h2>КОЛЕСО БИЗНЕС-БАЛАНСА</h2>
                    <p>ОТСЛЕДИТЕ СВОИ <b>СЛАБЫЕ ТОЧКИ</b> И ОПРЕДЕЛИТЕ <b>НА КАКИХ СФЕРАХ НЕОБХОДИМО СОСРЕДОТОЧИТЬСЯ ПРЯМО СЕЙЧАС</b>, ЧТОБЫ ДОСТИЧЬ МАКСИМАЛЬНОГО РЕЗУЛЬТАТА</p>
                    <form action="">
                        <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Введите имя' required/>
                        <input onChange={(e)=>{setPhone(e.target.value)}} type="text" placeholder='Введите номер телефона' required/>
                        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Введите почту' required/>
                        <div className="">
                            <input onChange={(e)=>{setTesting(e.target.value)}} type="checkbox"/>
                            <label htmlFor="">Не хочу заполнять колесо бизнес-баланса</label>
                        </div>
                        <button type='button' onClick={()=>{proverka()}}>ПОЛУЧИТЬ РЕКОМЕНДАЦИЮ БЕСПЛАТНО</button>
                    </form>
                </div>
                <div className={window?"window__check":"d-none"}>
                    <div className="close__btn">
                        <img src={close} onClick={()=>{proverka()}} alt="" />
                    </div>
                    <div className="window__text">
                        <h2>СПАСИБО ЗА ВАШУ ЗАЯВКУ!</h2>
                        <b>МЫ СВЯЖЕМСЯ С ВАМИ В ТЕЧЕНИЕ 15 МИНУТ</b>
                        <p>ЕСЛИ ВЫ ХОТИТЕ <b>ДЕТАЛЬНЕЕ РАССМОТРЕТЬ ТЕКУЩЕЕ СОСТОЯНИЕ БИЗНЕСА</b>, ПРЕДЛАГАЕМ <b>ПРОЙТИ НЕБОЛЬШОЙ ТЕСТ</b> И ОТВЕТИТЬ НА 24 ВОПРОСА. ВЫ ПОЙМЕТЕ КАКИЕ СФЕРЫ БИЗНЕСА НЕОБХОДИМО УЛУЧШИТЬ. ЭТО ЗАЙМЕТ У ВАС НЕ БОЛЕЕ 10 МИНУТ</p>
                        <button className='btn'>НАЧАТЬ ТЕСТИРОВАНИЕ</button>
                        <button className="btn__white">МНЕ НЕ ИНТЕРЕСНО</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
