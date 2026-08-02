import { useState } from 'react'
import TreeView from './components'
import menus from './components/data'


function App() {
  

  return (
    <>
    <TreeView menus={menus} />
    </>
  )
}

export default App
  