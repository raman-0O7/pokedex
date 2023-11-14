import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css"
function PokemonList() {
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);

    const [pokemonUrl, setPokemonUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [prevPokemonUrl , setPrevPokemonUrl] = useState("");
    const [nextPokemonUrl , setNextPokemonUrl] = useState("");

    async function getPokemonList() {
        setIsLoading(true);
        const listOfPokemon = await axios.get(pokemonUrl);

        const pokemons = listOfPokemon.data.results;
        setPrevPokemonUrl(listOfPokemon.data.previous);
        setNextPokemonUrl(listOfPokemon.data.next);
        const pokemonPromise = pokemons.map((pokemon)=>{
            return axios.get(pokemon.url);
        });
  
        const PokemonPromiseResponse = await axios.all(pokemonPromise);
        console.log(PokemonPromiseResponse);
        const res = PokemonPromiseResponse.map((pokemon)=> {
            return {
                id: pokemon.data.id,
                name: pokemon.data.name,
                image: (pokemon.data.sprites.other)? pokemon.data.sprites.other.dream_world.front_default: pokemon.data.sprites.back_default,
                types: pokemon.data.types
            }
        });

        setPokemonList(res);
        setIsLoading(false);

    }
    useEffect(()=>{
        getPokemonList();
    }, [pokemonUrl]);

    return (
        <>
            <div className="pokemonlist-wrapper">
                {(isLoading)? <h3 className="loading">Loading..</h3>: 
                    pokemonList.map((pokemon)=> {
                        return <Pokemon name={pokemon.name} image={pokemon.image} key={pokemon.id} id={pokemon.id}/>
                    })
                }
            </div>   
            <div className="btns">
                <button disabled={prevPokemonUrl == null} onClick={()=> setPokemonUrl(prevPokemonUrl)}>Prev</button>
                <button disabled={nextPokemonUrl == null} onClick={()=> setPokemonUrl(nextPokemonUrl)}>Next</button>
            </div>
        </>
    )
}

export default PokemonList;