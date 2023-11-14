import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import "./Pokedex.css"
function Pokedex() {
    return (
        <>
        <div className="pokedex-wrapper">
            
            <Search />
            
        </div>
        <PokemonList />
        </>
    )
}

export default Pokedex;