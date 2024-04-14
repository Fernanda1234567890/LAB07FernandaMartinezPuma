import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'


function App() {
  const[count, setCount] = useState(0);

  function mostrarNumA() {
    var numAl = Math.floor(Math.random() * 100) + 1;
    alert("alerta : " + numAl);
  }

  return (
    <> 
      <h1> Laboratorio N° 7 </h1>  
        <div className='card'>
        
          <button onClick={mostrarNumA}> count :</button>
        </div>
    </>
  )
}

export default App
