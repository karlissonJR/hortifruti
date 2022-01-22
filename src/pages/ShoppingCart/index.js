import { useState, useEffect } from 'react';

import Header from '../../components/Header'

import './styles.css'

function ShoppingCart() {
  
  const [cart, setCart] = useState([])

  useEffect(() => {

    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]))
    }

    setCart(JSON.parse(localStorage.getItem('cart')))
    
  }, [])

  const removeFromCart = fruitId => {
    
    const newCart = cart.filter(fruit => {
      return fruit.id != fruitId
    })

    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  return (
    <>
        <Header menu="2"/>
        <h1>CARRINHO de COMPRAS</h1>
        <ul>
          {cart.map(fruit => {
            return (
              <>
                <li key={fruit.id}>{fruit.name}</li>
                <button onClick={() => removeFromCart(fruit.id)} type="button">Deletar</button>
              </>
            )
          })}
        </ul>
    </>
  );
}

export default ShoppingCart;
