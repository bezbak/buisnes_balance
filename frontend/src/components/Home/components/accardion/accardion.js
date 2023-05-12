import React from 'react';
import './accardion.scss'
const Accardion = () => {
    return (
        <div className='accardion' >
            <div className="container">
                <div className="container__inner">
                    <h1 className="titleAccardion">ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ</h1>
                    <div className="carousel">
                        <div className="carousel__inner" 
                            onClick={()=>{
                                document.querySelector('.inners1').classList.toggle('inners__active')
                                document.querySelector('.plus1').classList.toggle('plus__active')

                            }}
                        >
                            <span>
                                <h2>ПОДОЙДЕТ ЛИ ПРОГРАММА ДЛЯ МОЕГО БИЗНЕСА?</h2> <h1 className='plus1' >+</h1>
                            </span>
                            <p className='inners1' >В зависимости от ваших потребностей и анализа слабых сторон по колесу бизнес-баланса мы подберем тот формат программы, который будет полностью соответствовать вашему запросу. Программа не подойдет тем, кто хочет и дальше находиться в состоянии стагнации, боится принимать новые решения и не готов вкладываться в такие ресурсы как время и энергия.</p>

                        </div>
                        <div className="carousel__inner"
                            onClick={()=>{
                                document.querySelector('.inners2').classList.toggle('inners__active')
                                document.querySelector('.plus2').classList.toggle('plus__active')
                            }}
                        >
                            <span>
                                <h2>КАКИЕ ГАРАНТИИ ПРЕДОСТАВЛЯЕТ НАШЕ АГЕНТСТВО?</h2> <h1 className='plus2' >+</h1>
                            </span>
                            <p className='inners2' >Наша программа не даст «мгновенного результата», но чтобы этот процесс запустился как можно быстрее, необходима 100% вовлеченность и заинтересованность со стороны собственника. Авторская методика подойдет только тем, кто готов работать и меняться, а также посмотреть на свой бизнес через другую призму.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Accardion;
