import { useState } from 'react'
import './App.css'
import CountDown from './components/CountDown/CountDown'
import DigitalClock from './components/DigitalClock/DigitalClock'
import Cronometro from './components/Cronometro/Cronometro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DigitalClock/>
      <CountDown/>
      <Cronometro/>
    </>
  )
}

export default App
