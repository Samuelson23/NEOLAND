import { useState } from 'react'
import './App.css'
import CountDown from './components/CountDown/CountDown'
import DigitalClock from './components/DigitalClock/DigitalClock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DigitalClock/>
      <CountDown/>
    </>
  )
}

export default App
