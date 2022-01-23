import { useState, useEffect, Fragment } from 'react';

import Header from '../../components/Header'

import './styles.css'

function ShoppingCart() {
  
  const [cart, setCart] = useState([])

  useEffect(() => {

    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]))
    }

    setCart(JSON.parse(localStorage.getItem('cart')))
    
  }, [cart])

  const clearCart = () => {
    setCart([])
    localStorage.setItem('cart', JSON.stringify([]))
  }

  const removeFromCart = fruitId => {
    
    const newCart = cart.filter(fruit => {
      return fruit.id != fruitId
    })

    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const changeQuantity = (fruitId, order) => {
    const fruit = cart.find(value => {
      return value.id === fruitId
    })

    const fruitIndex = cart.indexOf(fruit)
    if (order === '-' && fruit.quantity > 1) {
      cart[fruitIndex].quantity--
    } else if (order === '+') {
      cart[fruitIndex].quantity++
    }

    localStorage.setItem('cart', JSON.stringify(cart))
  }

  return (
    <>
        <Header menu="2"/>
        <h1>CARRINHO de COMPRAS</h1>
        <button onClick={clearCart}>Limpar Carrinho</button>
        <ul>
          {cart.map(fruit => {
            return (
              <Fragment key={fruit.id}>
                <li>{fruit.name}</li>
                <button onClick={() => removeFromCart(fruit.id)} type="button">Deletar</button>
                <br/>
                <button onClick={() => changeQuantity(fruit.id, '-')}>-</button>
                <p>Quantidade {fruit.quantity}</p>
                <button onClick={() => changeQuantity(fruit.id, '+')}>+</button>
              </Fragment>
            )
          })}
        </ul>
    </>
  );
}

export default ShoppingCart;
