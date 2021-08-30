import React from 'react'
import Card from './Card'
import imagem2 from '../imagem2.jpg'
import imagem3 from '../imagem3.jpg'
import imagem4 from '../imagem4.jpg'
import imagem5 from '../imagem5.jpg'
import './Cards.css'
import { Container, InputGroupAddon, Input, InputGroup } from 'reactstrap'
import { Button } from 'reactstrap'


const cards = [{
    id:1,
    title: 'R$ 100,00',
    image: imagem2,
   
},{
    id:2,
    title: 'R$ 119,00',
    image: imagem3,
    
}, {
    id:3,
    title: 'R$ 124,00',
    image: imagem4,
}
]
function Cards () {
    
    return (
        <div>
            <div className='text'>
            <Container >
            <h1 className='display-8' className='pb-4'>BookStore</h1>
            </Container>
            </div>
            <div>
            <InputGroup  >
                <Input  className='bg-dark' placeholder="Search"/>
                <InputGroupAddon addonType="append">
                    <Button className='text-center' color='primary'>Pesquisar</Button>
                </InputGroupAddon>
                </InputGroup>
                
            </div>
            
        <div className='container d-flex justify-content-center align-items-center h-100 '>
            
            <div className='row'>
             {
                 cards.map(card =>(
                    <div className='col-md-4 key={card.id}'>
                        
                    <Card title={card.title} imageSource={card.image} text={card.text} />
                </div>
                 ))
             }
            </div>
           
       
     
        </div>
        </div>
    )
}

export default Cards
