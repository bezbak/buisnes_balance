import React from 'react'
import "./aboutus.scss"
import ab1 from "../../../../assets/ab1.svg"
import ab2 from "../../../../assets/ab2.svg"
import ab3 from "../../../../assets/ab3.svg"
export default function AboutUs() {
  return (
    <div className='about'>
      <div className="container">
        <div className="about__inner">
          <div className="about__block">
            <img src={ab1} alt="" />
            <p><b>людей на земле</b>, которые в любой момент могут стать вашими конкурентами, а вы <b>откладываете старт</b> (по данным Организации Объединенных Наций)</p>
          </div>
          <div className="about__block">
            <img src={ab2} alt="" />
            <p>по <b>эффективности бизнеса</b> заняло ОАЭ, а вы продолжаете развиваться <b>только в России</b> (по данным IMD World Competitiveness Ranking)</p>
          </div>
          <div className="about__block">
            <img src={ab3} alt="" />
            <p><b>вырастет выручка</b> вашего бизнеса после работы с нашим <b>агентством</b> (по данным кейсов Business in Balance)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
