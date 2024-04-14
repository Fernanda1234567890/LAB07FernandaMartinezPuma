import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'

function App() {
  const[count, setCount] = useState(0);

  return (
    <> 
      <h1> Laboratorio N° 7 </h1>  
        <div className='card'>
        
          <button onClick={() => setCount((count) => count +5)}>
            count is {count}
          </button>
        </div>
    </>
  )
}

export default App
