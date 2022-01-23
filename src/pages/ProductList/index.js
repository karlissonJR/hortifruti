import { useState, useEffect } from 'react'

import { Box, Alert, IconButton, Collapse, CloseIcon, Snackbar } from '@mui/material'

import Card from '../../components/Card'
import Header from '../../components/Header'

import fruityviceApi from '../../api/fruityvice'

import './styles.css'

function ProductList() {
  
  const [fruits, setFruits] = useState([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fruityviceApi.get('/all').then(response => {
      setFruits(response.data)
    })
  }, [])

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  };

  const handleClick = () => {
    setOpen(true)
  }
  
  return (
    <>
      <Header menu="1" />
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Produto adicionado ao carrinho!
        </Alert>
      </Snackbar>
      <div className="container">
        {fruits.map(fruit => {
          return (
              <Card
                key={fruit.id}
                title={fruit.name}
                fruit={fruit}
                onClick={handleClick}
              />
          )
        })}
      </div>
    </>
  );
}

export default ProductList;
