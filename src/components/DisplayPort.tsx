import { useState, useEffect } from "react";


interface Props {
  CharacterData: Character | undefined;
}

interface Character {
  name: string;
  id:Number;
  img:string;
  race:string;
  culture_background:string;
  profession_class:string;
  subclass:string;
  place_of_Birth:string;
  system:string;
  p1:string;
  p2:string;
  p3:string;
  p4:string;
  p5:string;
  p6:string;
  p7:string;
  p8:string;
  p9:string;
  p10:string;
  p11:string;
  p12:string;
  p13:string;
  p14:string;
  p15:string;

}

const DisplayPort = (props:Props) => {
  const { CharacterData } = props;
  console.log(CharacterData)
  if (CharacterData) {
    return(
      <>
      <section>
        <div>
          <h1>{CharacterData.name}</h1>
          <p>{CharacterData.p1}</p>
          <p>{CharacterData.p2}</p>
          <p>{CharacterData.p3}</p>
          <p>{CharacterData.p4}</p>
          <p>{CharacterData.p5}</p>
          <p>{CharacterData.p6}</p>
          <p>{CharacterData.p7}</p>
          <p>{CharacterData.p8}</p>
          <p>{CharacterData.p9}</p>
          <p>{CharacterData.p10}</p>
          <p>{CharacterData.p11}</p>
          <p>{CharacterData.p12}</p>
          <p>{CharacterData.p13}</p>
          <p>{CharacterData.p14}</p>
          <p>{CharacterData.p15}</p>
        </div>
        <div>
          <img src={CharacterData.img} alt={CharacterData.name} />
        </div>
        
      </section>
      </>
    )
  }
  return (
    <>
      <h1>no character selected</h1>
    </>
  )
}

export default DisplayPort