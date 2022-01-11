import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";

// O componente MovieCard está compartilhando os nomes de suas classes com outros componentes que já possuem estilização, por isso, não foi necessário criar um arquivo styles.css  para ele

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    )
}

export default MovieCard;

// Link vs <a>

// <Link /> is a component, that render a <a /> anchor tag. However in the main conditions the default behavior is prevented (preventDefault()). That allow it to apply the change to the history object (onClick event). Which react-router navigation is based on. And on the some conditions as mentioned above. It just fall back to the browser behavior. And just be exactly a <a /> anchor tag (no preventDefault()).
// For the use. If you are using React-router. Then you just need to use Link.