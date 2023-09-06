
import { useEffect } from 'react';
import './App.css'
import NavSection from './components/NavSection'



function App() {
  
  // * Get value from search input in nav
  const getSearchValue = (searchVal) => {
    console.log("Search val =", searchVal);
  }

  // * Fetch data from API
  const url = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error ---->", error);
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, [])
  


  
  return (
    <>
      <NavSection getSearchValue={getSearchValue} />
      <div>This is main section</div>
    </>
  )
}

export default App
