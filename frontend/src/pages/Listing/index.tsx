import axios from "axios";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";
import MovieCard from "../../components/MovieCard";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);
    // Boa prática - iniciar o useState com um valor inicial

    // Cria-se de um novo estado para guardar no componente a página que foi carregada e, depois, são setados os valores iniciais de page
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });


    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`).then(response => {
            const data = response.data as MoviePage;
            setPage(data);
        });
    }, [pageNumber]);

    // O segundo argumento do useEffect é uma lista de objetos a ser observada pelo Hook. Sempre que houver alteração em qualquer um dos objetos listados, a função será executada novamente. Nesse caso, a lista a ser observada é a pageNumber, ou seja, sempre que o número da página for alterado, a função useEffect é executada novamente. Se a lista estiver vazia, a função será executada SOMENTE quando o componente for carregado. Dessa forma, a requisição será feita apenas uma vez de maneira controlada.

    // Esta é uma função Lambda que recebe um número como parâmetro que será setado como o novo número da página através da função setPageNumber()
    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange} />
            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        // Em uma renderização dinâmica de coleção, cada elemento renderizado DEVE possuir um atributo key - aqui, no caso, é o id do movie
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}
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

// FORMA ERRADA:

    // Dessa maneira, o request não está ligado ao ciclo de vida do componente React, por isso a repetição no console:
    // axios.get(`${BASE_URL}/movies?size=12&page=0`).then(response => {
    //     console.log(response.data);
    // });

// Para fazer da FORMA CORRETA, usamos Hooks - Hooks são funções cujo comportamento está vinculado ao estado e ao ciclo de vida do React a partir de componentes funcionais.

    // Hook: useState
    // Manter estado no componente
    // Hook: useEffect
    // Executar algo na instanciação ou destruição do componente, observar estado