import { useEffect, useState } from "react";
import { PokemonCards } from "./PokemonCard";
import './pokemon.css';

export default function Pokemon() {
    let [pokemon, setPokemon] = useState([]);
    let [loading, setLoading] = useState(true);
    let [myError, setError] = useState(null);
    let [search, setSearch] = useState("");

    let pokemonSearch = pokemon.filter((elem) => {
      return elem.name.toLowerCase().includes(search.toLowerCase());
    })

    let API = "https://pokeapi.co/api/v2/pokemon?offset=100&limit=100"; 

    let fetchapi = async () =>{
        try{
            const res = await fetch(API);
            const data = await res.json();
            const pokemondetails = data.results.map(async (elem) => {
                let pokemonres = await fetch(elem.url);
                let pokemondata = await pokemonres.json();
                return pokemondata;
            })
            const pokemon_arr = await Promise.all(pokemondetails);
            console.log(pokemon_arr);
            setPokemon(pokemon_arr);
            console.log(typeof(pokemon));
            setLoading(false);
        }
        catch(error){
            console.log(error);
            setLoading(false);
            setError(error);
        }
    }
    useEffect(() => {
        fetchapi();
    },[])

    if(loading){
      return(
        <>
        <h1>Loading....</h1>
        </>
      )
    }

    if(myError){
      return(
        <>
        <h1>{myError.message}</h1>
        </>
      )
    }
    return(
        <>
        
      <section className="container">
        <header>
          <h1> Lets Catch Pokémon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e) => {setSearch(e.target.value)}}
          />
        </div>
        <div>
          <ul className="cards">
            {pokemonSearch.map((curPokemon) => {
              return (
                <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
              );
            })}
          </ul>
        </div>
      </section>
        </>
    )
}