import { useState } from 'react'
import RandomColor from './components/randomColor'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomColor/>
    </>
  )
}

export default App
