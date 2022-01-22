import { useState, useEffect } from 'react'

import Card from '../../components/Card'
import Header from '../../components/Header'

import fruityviceApi from '../../api/fruityvice'

import './styles.css'

function ProductList() {
  
  const [fruits, setFruits] = useState([])

  useEffect(() => {
    fruityviceApi.get('/all').then(response => {
      setFruits(response.data)
    })
  }, [])
  
  return (
    <>
      <Header menu="1" />
      <div className="container">
        {fruits.map(fruit => {
          return (
              <Card
                key={fruit.id}
                title={fruit.name}
                fruit={fruit}
              />
          )
        })}
      </div>
    </>
  );
}

export default ProductList;
