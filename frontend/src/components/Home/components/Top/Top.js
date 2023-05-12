import React, { useState } from 'react'
import "./top.scss"
import { slider } from '../../../../consts/consts'
import arrow from "../../../../assets/arrow.svg"
export default function Top() {
    const [slide, setSlide] = useState(0);
    const rightSlide = ()=>{
        return slide <7?setSlide(slide+1): setSlide(0)
    }
    const leftSlide = ()=>{
        return slide >0?setSlide(slide-1): setSlide(7)
    }
    const singleSlide = slider[slide]
    const width = `${singleSlide.percent}%`
    const divStyle = {
        width
    }
    return (
        <div className='top'>
            <div className="container">
                <div className="top__inner">
                    <video autoPlay={true} src={singleSlide.video}></video>
                    <div className="top__textblock">
                    <div className="top__text">
                        <p>АГЕНТСТВО-АГРЕГАТОР ПОЛНОГО ЦИКЛА, ГДЕ БИЗНЕС ПОЛУЧАЕТ КОМПЛЕКСНОЕ РЕШЕНИЕ, ОТ ЗАПУСКА С НУЛЯ ДО УПАКОВКИ ВО ФРАНШИЗУ И ВЫХОДА НА ЗАРУБЕЖНЫЕ РЫНКИ</p>
                        <h1>BUSINESS <br /> IN BALANCE</h1>
                        <a href='#consultation' className='btn'>ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</a>
                    </div>
                    <div className="top__slide">
                        <div className="slide__buttons">
                            <button type='button' onClick={()=>{leftSlide()}} className='prev'><img src={arrow} alt="" /></button>
                            <button type='button' onClick={()=>{rightSlide()}} className='next'><img src={arrow} alt="" /></button>
                        </div>
                        <div className="slide__text">
                            <h3 className="slide__title">{singleSlide.title}</h3>
                            <p><span>ДО:</span> {singleSlide.before}</p>
                            <p><span>ПОСЛЕ:</span> {singleSlide.after}</p>
                            <div>
                                {singleSlide.percent}%
                                <div className="progres">
                                    <div style={divStyle}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="top__footer">
                    <p>В основу концепции агентства заложен <b>принцип баланса</b>. Главным подходом является аналитика всех бизнес-процессов компании, основанной на грамотно выстроенной работе каждой составляющей, чтобы <b>общий механизм функционировал исправно</b></p>
                </div>
            </div>
        </div>
    )
}
