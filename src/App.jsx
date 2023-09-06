
import './App.css'
import NavSection from './components/NavSection'



function App() {

  const getSearchValue = (searchVal) => {
    console.log("Search val =", searchVal)
  }

  
  
  return (
    <>
      <NavSection getSearchValue={getSearchValue} />
      <div>This is main section</div>

    </>
  )
}

export default App
