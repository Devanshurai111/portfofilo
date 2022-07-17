import React from 'react'
import './footer.css'
import {ImTwitter} from 'react-icons/im'
import{GrInstagram} from 'react-icons/gr'
import {BsLinkedin} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
      <a href="#"className='footer_logo'>Devanshu</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_social">
        <a href="https://twitter.com/rai_devanshu7" target="_blank"><ImTwitter/></a>
        <a href="https://www.instagram.com/pineapple_phoenix7/" target="_blank"><GrInstagram/></a>
        <a href="https://www.linkedin.com/in/devanshu-rai1/" target="_blank"><BsLinkedin/></a>
      </div>
      <div className="footer_copyright">
        <small>
          &copy;Devanshu Rai. All Rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default footer