import React, { useState } from 'react'
import "./header.scss"
export default function Header({burger, setBurger}) {
  return (
    <div className='header'>
        <div className="container">
            <div className="header__inner">
                <a href="/">BB</a>
                <div className="header__menu">
                    <div className="burger" onClick={()=>{setBurger(true)}}>
                        <span></span>
                    </div>
                    <div className={burger ? "burger__menu burger__menu--active":"burger__menu d-none"}>
                        <div className="burger__close" onClick={()=>{setBurger(false)}}>
                        </div>
                        <div className="burger__nav">
                            <a href="/">Главная</a>
                            <a href="#wheel">Колесо бизнес-баланса</a>
                            <a href="#author">Автор системы</a>
                            <a href="#price">Тарифы</a>
                            <a href="#faq">Ответы на частые вопросы</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
