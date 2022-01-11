import Pagination from "components/Pagination";
import MovieCard from "../../components/MovieCard";

function Listing() {
    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
        // col-sm-6 - significa que o card ocupará 6 das 12 colunas do grid-system do bootstrap na largura small, isto é, ficarão 2 cards por linha nesse tamanho de tela
        // mb-3 - margin-botton: 3;
    )
}

export default Listing;

// Fragment é usado, pois a função só pode retornar um componente. Ao usar o Fragment, é possível colocar dentro dele quantos componentes forem desejados como filhos
// Os fragmentos permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM.