import { useState, useEffect } from "react";
import CharacterList from './components/CharacterList'
import DisplayPort from './components/DisplayPort'
import './App.css'


function App() {
  const [data, setData] = useState();
  const handleCharacterClick = async (name: string) => {
      try {
          console.log('clicked')
          const response = await fetch(`http://localhost:3000/characters/${name}`);
          const data = await response.json();
          setData(data.character[0])
      } catch (error) {
          console.error("Error fetching characters:", error);
      }
  }
  return <section>
    <CharacterList onCharacterClick={handleCharacterClick} _id={''} name={''}></CharacterList>
    <DisplayPort CharacterData={data}></DisplayPort>
  </section>
}

export default App
