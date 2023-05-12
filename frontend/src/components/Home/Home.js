import React from 'react'
import Top from './components/Top/Top'
import Author from './components/Author/Author'
import Consultation from './components/consultation/consultation'
import AboutUs from './components/AboutUs/AboutUs'
import Wheel from './components/Wheel/Wheel'
import Accardion from './components/accardion/accardion'
export default function Home() {
  return (
    <div>
      <Top/>
      <AboutUs/>
      <Wheel/>
      <Author/>
      <Consultation/>
      <Accardion/>
    </div>
  )
}
