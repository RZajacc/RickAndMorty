
import { useEffect, useState } from 'react';
import NavSection from './components/NavSection'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharacterCard from './components/CharacterCard';





function App() {

  const [searchVal, setsearchVal] = useState("");
  const [fetchData, setfetchData] = useState([])
  
  

  // * Fetch data from API
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setfetchData(data);
    } catch (error) {
      console.log("Error ---->", error);
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  
  return (
    <>
      <NavSection setsearchVal={setsearchVal} />
      <CharacterCard fetchData={fetchData} />      
    </>
  )
}

export default App
