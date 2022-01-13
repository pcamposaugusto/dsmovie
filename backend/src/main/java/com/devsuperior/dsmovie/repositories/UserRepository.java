package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
	
}

// findByEmail() - método padrão do JPA para buscar o usuário por email no Banco de Dados - por esse motivo, ele se encontra no Repository