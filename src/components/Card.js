import React from 'react'
import { Container } from 'reactstrap'
import './Cards.css'


const Card = ({title, text, imageSource}) => {
  
  return (
    <div >
    

    <div className='card bg-dark'>
      <div className='overflow'>
      <img  src= {imageSource} alt=''className='card-img-top' />
      </div>
      <div className='card-body text-light'>
         <h4 className='card-title'>{title}</h4>
         <p className='card-text text-secondary'>{text}</p>
         <a href="#!" class="btn btn-primary">
           Comprar
         </a>
         <a  className='botao' href="#!" class="btn btn-primary" >
           Excluir
         </a>
      </div>
      
    </div>
    </div>
  )
  
}

export default Card
