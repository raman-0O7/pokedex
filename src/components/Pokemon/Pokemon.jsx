import "./Pokemon.css"
import {Link} from "react-router-dom";
function Pokemon({name, image, id}) {

    return (
        <div className="pokemon-wrapper">
            <Link to={`/pokemon/${id}`} className="link">
            <div>
                <p>{name}</p>
                <img src={image}/>
            </div>
            
        </Link>
        </div>
    )
}

export default Pokemon;