import React from 'react'
import './portfolio.css'
import img2 from '../../assets/assets/Screenshot2.png'
const data=[
  {
    id:1,
    image:img2,
    title:'PokéDex',
    github:'https://github.com/Devanshurai111?tab=repositories',
    demo:"https://pokedex-react-mui.netlify.app/"
  }
]
const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfoilo_item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
            <div className="portfoilo_item-cta">
            <a href={github} className='btn' target='_blank'>GitHub</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>

        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio