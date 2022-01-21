import './App.css';

import { useState, useEffect } from 'react'

import Card from './components/Card'

import fruityviceApi from './api/fruityvice'

function App() {
  
  const [fruits, setFruits] = useState([])

  useEffect(() => {
    fruityviceApi.get('/all').then(response => {
      setFruits(response.data)
    })
  }, [])
  
  return (
    <div className="container">
      {fruits.map(fruit => {
        return (
            <Card
              key={fruit.id}
              title={fruit.name}
              body={fruit}
            />
        )
      })}
    </div>
  );
}

export default App;
