import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImTwitter} from 'react-icons/im'
const headersocials = () => {
  return (
    <div className='header__soicals'>
      <a href="https://www.linkedin.com/in/devanshu-rai1/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Devanshurai111" target="_blank"><FaGithub/></a>
      <a href="https://twitter.com/rai_devanshu7" target="_blank"><ImTwitter/></a>
    </div>
  )
}

export default headersocials