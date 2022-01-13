package com.devsuperior.dsmovie.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

	@Autowired
	private ScoreService service;
	
	@PutMapping
	public MovieDTO saveScore(@RequestBody ScoreDTO dto) {
		MovieDTO movieDTO = service.saveScore(dto);
		return movieDTO;
	}
	
}

// O método PUT usado não apenas para atualizar uma informação, mas também para salvar de forma idempotente, isto é, se você realizar essa operação mais de uma vez, terá o mesmo resultado. A gravação não idempotente clássica é um acréscimo, porque a repetição levaria ao acréscimo de várias cópias.
// Salvar mais de uma vez tem o mesmo efeito que salvar de uma vez só!!!

// Um método HTTP é idempotente se uma requisição idêntica pode ser feita uma ou mais vezes em sequência com o mesmo efeito enquanto deixa o servidor no mesmo estado. Em outras palavras, um método idempotente não deveria possuir nenhum efeito colateral (exceto para manter estatísticas). Implementados corretamente, o GET, HEAD, PUT, e DELETE são métodos idempotentes, mas não o método POST.
// https://developer.mozilla.org/pt-BR/docs/Glossary/Idempotent


// @RequestBody - essa anotação indica que o parâmetro do método estará vinculado ao corpo da requisição web - A requisição passa as informações em formato JSON e essas informações são convertidas (desserializadas) em um objeto, no caso, DTO 
