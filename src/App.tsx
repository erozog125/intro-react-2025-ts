import { useState } from 'react'
import './App.css'
import { Button } from './Components'

export const App = () => {

  const [newText, setNewText] = useState('Este es mi primer curso de React')

  const handleClick = () => {
    setNewText('Ejecuntando el evento onClick')
  }

  return (
    <>
      <h1>{newText}</h1>
      <Button text='Hello' parentMethod={handleClick} />    
    </>
  )
}
