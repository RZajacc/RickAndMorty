
import { useState } from 'react';
import NavSection from './components/NavSection'

import CharacterCard from './components/CharacterCard';
import Pagination from './components/Pagination';


function App() {

  const [searchVal, setsearchVal] = useState("");
  const [targetPage, setTargetPage] = useState(1)
  const [charInfo, setCharInfo] = useState([])

  return (
    <>
      <NavSection setsearchVal={setsearchVal} />
      <CharacterCard searchVal={searchVal} targetPage={targetPage} setCharInfo={setCharInfo} />  
      <Pagination targetPage={targetPage} setTargetPage={setTargetPage} charInfo={charInfo} />
    </>
  )
}

export default App
