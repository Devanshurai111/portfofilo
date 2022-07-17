import React from 'react'
import './contact.css'
import{HiOutlineMail} from 'react-icons/hi'
import{GrInstagram} from 'react-icons/gr'
import{IoLogoWhatsapp} from 'react-icons/io'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
          <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>devanshurai11@gmail.com</h5>
            <a href="mailto:devanshurai11@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
          <GrInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>Devanshu Rai</h5>
            <a href="https://www.instagram.com/pineapple_phoenix7/" target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
          <IoLogoWhatsapp className='contact_option-icon'/>
            <h4>WhatApp</h4>
            <h5>+919889030266</h5>
            <a href="https://web.whatsapp.com/send?phone=9889030266" target="_blank">Send a Message</a>
          </article>
        </div>
        <form>
          <input type="text" name='name' placeholder='Your Full Name'required />
          <input type="email" name='email' placeholder='Your Email'required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact