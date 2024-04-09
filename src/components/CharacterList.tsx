import { useState, useEffect } from "react";

    interface Props {
        _id: string;
        name: string;
        onCharacterClick: (name: string) => void;
    }
const CharacterList = ({ onCharacterClick }: Props) => {
    const [Characters, setCharacters] = useState<Props[]>([]);


    useEffect(() => {
        async function fetchCharacters() {
            try {
                const response = await fetch('http://localhost:3000/characters');
                const data = await response.json();
                setCharacters(data.characters);
            } catch (error) {
                console.error("Error fetching characters:", error);
            }
        }
        fetchCharacters();
    }, []);

    return (
        <>
            <ul>
                {Characters.map((Character:Props)=>(
                    <button key={Character._id} onClick={()=>onCharacterClick(Character.name)}>{Character.name}</button>
                ))}
            </ul>
        </>
    )
}

export default CharacterList