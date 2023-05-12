import React from 'react';
import zakazchic from '../../../../assets/png__image.png'
import './author.scss'


const Author = () => {
    return (
        <div className='Author'>
            <div className="container">
                <div className="container__inner"></div>
                <div className="authorParent">
                    <div className="authorParent__items itemOne">
                        <h2>АВТОР СИСТЕМЫ BUSINESS IN BALANCE</h2>
                        <br />
                        <h5>СОФЬЯ НИКИТЕНКОВА — БИЗНЕС-МЕНТОР, ЭКСПЕРТ ПО ФРАНЧАЙЗИНГУ</h5>
                        <div className="authorParent__items-flex">
                            <section className='authorParent__items-flex-sections sectionOne' >
                                <div className="authorParent__items-flex-sections-items">
                                    Опыт оперативного и стратегического управления продажами в 50+ компаниях более 3 лет
                                </div>
                                <div className="authorParent__items-flex-sections-items">
                                    Опыт подбора и организации работы команды из 35 человек
                                </div>
                                <div className="authorParent__items-flex-sections-items">
                                    Опыт финансового планирования, оптимизации текущих издержек
                                </div>
                                <div className="authorParent__items-flex-sections-items">
                                    Благодаря привлечению новых партнеров франчайзи прибыль ЭПЛ Даймонд увеличилась до 1 млрд. Также запускала новую ювелирную точку в ОАЭ
                                </div>
                            </section>
                            <section className='authorParent__items-flex-sections sectionTwo' >
                                <div className="authorParent__items-flex-sections-items">
                                    Опыт реализации проектов с нуля и вывода на показатели от 1,5 до 12 млн в месяц, в том числе упаковка, продвижение и вывод бизнеса на рынок России, Казахстана, Перу, Великобритании, Финляндии, Монголии, Литвы и Латвии
                                </div>
                                <div className="authorParent__items-flex-sections-items">
                                    За период работы в компании ЭПЛ. Якутские бриллианты с 2018 года, мной лично было открыто более 70 ювелирных торговых точек по франшизе
                                </div>
                                <div className="authorParent__items-flex-sections-items">
                                    Большая практика привлечения
                                    и переговоров с партнерами
                                    с последующим сопровождением
                                </div>
                            </section>
                        </div>
                        <button className='authorParent__btn' > ПОСМОТРЕТЬ ТАРИФЫ</button>
                    </div>
                    <div className="authorParent__items itemTwo">
                        <img src={zakazchic} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Author;
