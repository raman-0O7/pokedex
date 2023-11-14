import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import "./PokemonDetails.css";

function PokedexDetails() {
    const {id} = useParams();
    const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/${id}`
    const [pokemonData, setPokemonData] = useState({});
    async function getPokemonDetails() {
        const response = await axios.get(POKEMON_URL);
        console.log(response);
        const res = {
            name: response.data.name,
            height: response.data.height,
            weight: response.data.weight,
            image: response.data.sprites.other.dream_world.front_default,
            type: response.data.types.map((t)=>t.type.name)
        };
        console.log(res);
        setPokemonData(res);
        console.log(pokemonData);
    }

    useEffect(()=>{
        getPokemonDetails()
    }, []);
    return (
        <>
            <div className="pokemon-details-wrapper">
                <img src={pokemonData.image} className="pokemon-detail-image"/>
                <h2 className="pokemon-detail-name">{pokemonData.name}</h2>
                <p className="pokemon-detail-feature">Height: {pokemonData.height}</p>
                <p className="pokemon-detail-feature">Weight: {pokemonData.weight}</p>
                <div className="pokemon-detail-type-wrapper">
                {(pokemonData.type)? pokemonData.type.map((t)=> <p key={t} className="pokemon-detail-types">{t}</p>) : <></>}
                </div>
            </div>
        </>
    )
}

export default PokedexDetails;