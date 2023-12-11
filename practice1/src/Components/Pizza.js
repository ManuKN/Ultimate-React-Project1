import React from 'react'
import './Pizza.css'

function Pizza(props) {
 console.log(props);
  // if(props.Pizzaobj.soldOut) return null;
  return (
    <li className={`pizza ${props.Pizzaobj.soldOut?"sold-out":""}`}>x
      <img  src={props. Pizzaobj.photoName} alt='Image not loaded'/>
      <div className='pizzainfo'>
      <h5>{props. Pizzaobj.name}</h5>
      <p>{props. Pizzaobj.ingredients}</p>
      <span>{props.Pizzaobj.soldOut?'SOLD OUT':props.Pizzaobj.price}</span>
      </div>
    </li>
  )
}

export default Pizza