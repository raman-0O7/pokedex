import { useState } from 'react'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import CustomRouter from './Routes/CustomRouter'

function App() {

  return (
    
    <>
      <h1>Pokedex</h1>
      <CustomRouter />
    </>
  )
}

export default App
