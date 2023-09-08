
import { useState } from 'react';
import NavSection from './components/NavSection'

import CharacterCard from './components/CharacterCard';


function App() {

  const [searchVal, setsearchVal] = useState("");

  
  return (
    <>
      <NavSection setsearchVal={setsearchVal} />
      <CharacterCard searchVal={searchVal} />      
    </>
  )
}

export default App
