import {Route, Routes} from "react-router-dom";
import Pokedex from "../components/Pokedex/Pokedex";
import PokedexDetails from "../components/PokemonDetails/PokemonDetails";

function CustomRouter() {
    return (
        <Routes >
            <Route path="/" element={<Pokedex/>}/>
            <Route path="/pokemon/:id" element={<PokedexDetails/>}/>
        </Routes>
    )
    
}

export default CustomRouter;