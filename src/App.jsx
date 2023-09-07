
import { useEffect, useState } from 'react';
import NavSection from './components/NavSection'




function App() {

  const [searchVal, setsearchVal] = useState("");
  
  console.log("Search val--->", searchVal)
  

  // // * Fetch data from API
  // const url = "https://rickandmortyapi.com/api/character";

  // const fetchCharacters = async () => {
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log("Error ---->", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchCharacters()
  // }, [])
  

  return (
    <>
      <NavSection setsearchVal={setsearchVal} />
      <div>This is main section</div>
    </>
  )
}

export default App
