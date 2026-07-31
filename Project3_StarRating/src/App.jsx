import { useState } from 'react'

import './index.css'
import StarRating from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StarRating stars= {10}/>
    </>
  )
}

export default App
