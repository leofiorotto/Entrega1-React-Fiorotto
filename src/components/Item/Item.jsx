import React from 'react'
import "./Item.css"
import CartWidget from '../CartWidget/CartWidget';

const Item = ({ id, name, img, price }) => {
    console.log("Props received in Item:", { id, name, img, price });
  return (
    <article className="Item">
        <header>
          <h2>{name}</h2>
        </header>

        <picture>
          <img src={img} alt={name} />
        </picture>

        <section>
          <p>Precio: {price} ETH</p>
        </section>

        <footer className='Item-footer'>
          <button>Ver</button>
          <button> <CartWidget /></button>
        </footer>
        
      </article>
  )
}


export default Item