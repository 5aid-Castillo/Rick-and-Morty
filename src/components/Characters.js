
export default function Characters(props) {
    const {characters,setCharacters}= props; 
  
    const resetCharacters = () =>{
        setCharacters(null);
    }
  return (
    <div className="characters">
        
        <h1>Characters</h1>
        <button className="back-home"onClick={resetCharacters}>Return Home</button>
        <div ClassName="container-characters">
            {characters.map((character,index) => (
                <div className="character-container" key={index}>
                    <div>
                    <img src={character.image} alt={character.name} />
                    </div>
               

                <div>
                    <h3>{character.name}</h3>
                    <h6>{character.status === "Alive" ?(
                        <>
                            <span className="alive"/>
                            Alive
                        </>
                    ): (
                        <>
                            <span className="dead" />
                            Dead
                        </>
                    )}</h6>
                    <h6>{character.species}</h6>
                    <p>
                        <span className="text-grey">Episodes: </span>
                        <span>{character.episode.length}</span>
                    </p>
                </div>
                </div>
            ))}
        </div>

        








    </div>

  )
}
