import { useState } from 'react'
import './app.css'

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [message, setMessage] = useState('')

  function handleCalcIMC() {
    if(!height || !weight) {
      setMessage('')
      return false
    }

    if(isNaN(height) || isNaN(weight)){
      setMessage('Informe o peso e altura corretos!')
      return false
    }

    if(height <= 0 || weight <= 0) {
      setMessage('Não é permitido valores zerados!')
      return false
    }

    const heightNormalized = height / 100
    const imc = weight / (heightNormalized * heightNormalized)

    if(imc < 18.6) {
      setMessage('Você está abaixo do peso! Seu IMC: ' + imc.toFixed(2))
    }else if(imc >= 18.6 && imc < 24.9){
      setMessage('Você está no peso ideal! Seu IMC: ' + imc.toFixed(2))
    }else if(imc >= 24.9 && imc < 34.9) {
      setMessage('Você está levemente acima do peso! Seu IMC: ' + imc.toFixed(2))
    }else if(imc > 34.9) {
      setMessage('Cuidado - Obesidade! Seu IMC: ' + imc.toFixed(2))
    }
  }

  return (
    <div className='app'>
      <h1>Calculadora de IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          autoFocus
          placeholder='Peso em (kg) Ex.: 90'
          value={weight}
          onChange={event => setWeight(event.target.value)}
        />
        
        <input
          type="text"
          placeholder='Altura em (cm) Ex.: 180'
          value={height}
          onChange={event => setHeight(event.target.value)}
        />

        <button onClick={handleCalcIMC}>
          Calcular
        </button>
      </div>

      <h2>{message}</h2>

      <span>Created by: <a target='_blank' href="https://github.com/Azanniel">Azanniel</a></span>
    </div>
  )
}

export default App
