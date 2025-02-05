import { useState } from 'react'
import './App.css'
import { Button, RickAndMorty } from './Components'

export const App = () => {

  type user = {
    username: string;
    age?: number;
  }
  const [newText, setNewText] = useState<user>({username: 'Edwin'})

  const handleClick = () => {
    setNewText({username: 'Rozo'})
  }

  return (
    <>
      <h1>{newText.username}</h1>
      <RickAndMorty />
      {/* <Button text='Hello' parentMethod={handleClick} />     */}
    </>
  )
}
