package com.devsuperior.dsmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {
	
	@EmbeddedId
	private ScorePK id = new ScorePK();
	private Double value;
	
	public Score() {}

	public void setMovie(Movie movie) {
		id.setMovie(movie);
	}
	
	public void setUser(User user) {
		id.setUser(user);
	}
	
	public ScorePK getId() {
		return id;
	}

	public void setId(ScorePK id) {
		this.id = id;
	}

	public Double getValue() {
		return value;
	}

	public void setValue(Double value) {
		this.value = value;
	}
	

}

// A classe Score é uma classe de associação entre as classes Movie e User, por isso, ela terá uma chave primária composta. Essa chave será criada como classe, no caso, ScorePK. A classe ScorePK será o id de Score e deve ser instanciada como objeto para que Score possa ser adicionado ao banco de dados.
