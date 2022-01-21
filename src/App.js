import './App.css';

import { useState, useEffect } from 'react'

import fruityviceApi from './api/fruityvice'

function App() {
  
  const [fruits, setFruits] = useState([])

  useEffect(() => {
    fruityviceApi.get('/all').then(response => {
      setFruits(response.data)
    })
  }, [])
  
  return (
    <div>
      <header>
        <ul>
          {fruits.map(fruit => {
            return (
              <li key={fruit.id}>
                {fruit.name}
              </li>
            )
          })}
        </ul>
        
      </header>
    </div>
  );
}

export default App;
