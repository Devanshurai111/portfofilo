import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './headersocials'
const header = () => {
  return (
   <header>
    <div className="container header_container">
      <h5>Hello I'M</h5>
      <h1>Devanshu Rai</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA/>
      <HeaderSocial />
      <a href="#contact" className='scroll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default header