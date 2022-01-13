package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		Page<Movie> result = repository.findAll(pageable);
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x));
		return page;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Movie result = repository.findById(id).get();
		MovieDTO dto = new MovieDTO(result);
		return dto;
	}

}

// Como o Framework Spring já possui um gerenciador de dependências (JPA), não é necessário instanciar os objetos manualmente "private MovieRepository repository = new MovieRepository();". Para isso, existe a anotação @Autowired, que faz com que o gerenciador faça isso por nós automaticamente.

// O argumento Pageable possibilita trazer o resultado por página - ou seja, o retorno virá fracionado (12 filmes por página) - Nesse caso, será retornado um objeto especial de classe Page - substituindo List<>

// Função de alta ordem - quando uma função recebe outra como argumento ou quando ela possui uma outra função como retorno, ela é chamada de função de alta ordem - caso do result.map(arrow function)

// @Transactional annotation is used when you want the certain method/class(=all methods inside) to be executed in a transaction.
// Let's assume user A wants to transfer 100$ to user B. What happens is:
// We decrease A's account by 100$
// We add 100$ to B's account
// Let's assume the exception is thrown after succeeding 1) and before executing 2). Now we would have some kind of inconsistency because A lost 100$ while B got nothing. Transactions means all or nothing. If there is an exception thrown somewhere in the method, changes are not persisted in the database. Something called rollback happens.
// If you don't specify @Transactional, each DB call will be in a different transaction.

// O método findById retornará um Optional<Movie>, por isso a necessidade de ".get() para acessar o objeto Movie armazenado. Caso não exista um valor a ser retornado, um excessão será gerada   
