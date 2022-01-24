import { useState, useEffect, Fragment } from 'react';

import { Button } from '@material-ui/core'
import { DeleteOutline, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Collapse,
  Box,
  Typography,
  IconButton
} from '@mui/material'

import Header from '../../components/Header'

import './styles.css'

function Row({ fruit, cart, setCart }) {
  const [open, setOpen] = useState(false)

  const removeFromCart = fruitId => {
    
    const newCart = cart.filter(fruit => {
      return fruit.id !== fruitId
    })

    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  const changeQuantity = (fruitId, order) => {
    const fruit = cart.find(value => {
      return value.id === fruitId
    })

    const fruitIndex = cart.indexOf(fruit)
    if (order === '-') {
      cart[fruitIndex].quantity--
    } else if (order === '+') {
      cart[fruitIndex].quantity++
    }

    localStorage.setItem('cart', JSON.stringify(cart))
  }

  return (
    <Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{fruit.name}</TableCell>
        <TableCell>{fruit.genus}</TableCell>
        <TableCell>{fruit.family}</TableCell>
        <TableCell>{fruit.order}</TableCell>
        <TableCell className="quantity-cell">
          <Button
            style={{
              maxWidth: '30px',
              maxHeight: '30px',
              minWidth: '30px',
              minHeight: '30px',
              marginRight: '5px',
            }}
            onClick={() => changeQuantity(fruit.id, '-')}
            variant="contained"
            color="primary"
            disabled={fruit.quantity === 1 ? true : false}
          >
            -
          </Button>
          {fruit.quantity}
          <Button
            style={{
              maxWidth: '30px',
              maxHeight: '30px',
              minWidth: '30px',
              minHeight: '30px',
              marginLeft: '5px'
            }}
            onClick={() => changeQuantity(fruit.id, '+')}
            variant="contained"
            color="primary"
          >
            +
          </Button>
        </TableCell>
        <TableCell>
          <Button
            style={{
              maxWidth: '30px',
              maxHeight: '30px',
              minWidth: '30px',
              minHeight: '30px',
            }}
            onClick={() => removeFromCart(fruit.id)}
            variant="contained"
            color="secondary"
          >
            <DeleteOutline />
          </Button>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Informação Nutricional
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Carboidratos</TableCell>
                    <TableCell>Proteína</TableCell>
                    <TableCell>Gordura</TableCell>
                    <TableCell align="right">Calorias</TableCell>
                    <TableCell align="right">Açúcar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{fruit.nutritions.carbohydrates}g</TableCell>
                    <TableCell>{fruit.nutritions.protein}g</TableCell>
                    <TableCell>{fruit.nutritions.fat}g</TableCell>
                    <TableCell align="right">{fruit.nutritions.calories}g</TableCell>
                    <TableCell align="right">{fruit.nutritions.sugar}g</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </Fragment>
  )
}

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

  return (
    <>
        <Header menu="2"/>
        
        {cart.length > 0 ? (
          <Button
            style={{
              marginTop: '6rem',
              marginLeft: '1rem'
            }}
            color="secondary"
            variant="contained"
            onClick={clearCart}
          >
            Limpar Carrinho
          </Button>
        ) : false}
        
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">

            <TableHead>
              <TableRow>
                <TableCell>
                  
                </TableCell>
                <TableCell>Nome</TableCell>
                <TableCell>Gênero</TableCell>
                <TableCell>Família</TableCell>
                <TableCell>Ordem</TableCell>
                <TableCell>Quantidade</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {cart.map(fruit => {
                return (
                  <Row key={fruit.key} fruit={fruit} cart={cart} setCart={setCart} />
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        
    </>
  );
}

export default ShoppingCart;
