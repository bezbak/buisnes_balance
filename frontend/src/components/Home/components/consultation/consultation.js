import React from 'react';
import './consultation.scss'
import moon from '../../../../assets/moon.png'

const Consultation = () => {
    return (
        <div className='consultation'>
            <div className="container">
                <div className="container__inner">
                    <div className="moonParent">
                        <div className="moonParent__items moonParent__itemsOne">
                            <img src={moon} />
                        </div>
                        <div className="moonParent__items">
                            <div className="moonParent__items-flex"></div>
                            <div className="moonParent__items-flex-items">
                                <div className="moonParent__items-flex-items__box">
                                    <h5>Запуск бизнеса с нуля</h5>
                                    <h2>ОТ 50 000 РУБЛЕЙ</h2>
                                </div>
                                <div className="moonParent__items-flex-items__box">
                                    <h5>Оцифровка действующего бизнеса с помощью BI-системы</h5>
                                    <h2>ОТ 25 000 РУБЛЕЙ</h2>
                                </div>
                                <div className="moonParent__items-flex-items__box">
                                    <h5>Ребрендинг компании в связкес маркетингом</h5>
                                    <h2>ОТ 50 000 РУБЛЕЙ</h2>
                                </div>
                                <div className="moonParent__items-flex-items__box">
                                    <h5>Консультация по диверсификации бизнеса</h5>
                                    <h2>ОТ 80 000 РУБЛЕЙ</h2>
                                </div>
                               
                               
                            </div>
                            <div className="moonParent__items-flex-items">
                            <div className="moonParent__items-flex-items__box">
                                    <h5>Масштабирование (франчайзинг)</h5>
                                    <h2>ОТ 150 000 РУБЛЕЙ</h2>
                                </div>
                            <div className="moonParent__items-flex-items__box">
                                    <h5>Готовые решения для бизнесана территории ОАЭ</h5>
                                    <h2>ОТ 80 000 РУБЛЕЙ</h2>
                                </div>
                                <div className="moonParent__items-flex-items__box">
                                    <h5>Подбор и ресерч готового бизнеса</h5>
                                    <h2>ОТ 70 000 РУБЛЕЙ</h2>
                                </div>
                                <div className="moonParent__items-flex-items__box">
                                    <h5>Подбор и ресерч готового бизнеса</h5>
                                    <h2>ОТ 80 000 РУБЛЕЙ</h2>
                                </div>
                            </div>
                            <button className='moonParent__items-btn' >ЗАПИСАТСЯ НА КОНСУЛЬТАЦИЮ</button>
                        </div>
                    </div>
                </div>    
            </div>            
        </div>
    );
}

export default Consultation;
