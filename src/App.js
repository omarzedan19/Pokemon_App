import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import { getPokemon, getAllPokemon ,searchAboutPokemon } from './services/pokemon';
import './App.css';

import LogoComp from './logo';


function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialURL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12"

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }


  
  // const pokemonSearchButton=  () =>{
  //   if (pokemon === "") {
  //     alert("Give me a name to search");
  //   } else {
  //     fetchPokemonList();
  //     setPokemon("");
  //   }
 

  // } 
  // const [pokemon, setPokemon] = useState(); 
  // const [details, setDetails] = useState(null);



//   const [pokemonName, setPokemonName] = useState("ditto");
//   const [chosen, setChosen] = useState(false);

//   const pokemonSearchButton = async () => {
//     const response = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       setPokemonData({
//         name: pokemonName,
//         species: response.species.name,
//         img: response.sprites.front_default,
//         hp: response.stats[0].base_stat,
//         attack: response.stats[1].base_stat,
//         defense: response.stats[3].base_stat,
//         type: response.types[0].type.name
//       });
//       setChosen(true);
//     });
//   console.log(response);
//     console.log(chosen);
// };



//   const enterName = (e) => {
//     setPokemonName(e.target.value);
//   };
  
  return (
    <>
      
      <div>
        <div className='logo'><LogoComp  /></div>
      
          <>
            <div className="btn">
              
            </div>
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />
              })}
            </div>
            <div className="btn">
              <button onClick={prev}>Back</button>
              <button onClick={next}>Next</button>
            </div>
          </>
        
      </div>
    </>
  );
}

export default App;
