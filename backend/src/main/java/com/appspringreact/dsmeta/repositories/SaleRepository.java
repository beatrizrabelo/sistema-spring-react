package com.appspringreact.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appspringreact.dsmeta.entities.Sale;

//Acess BD
public interface SaleRepository extends JpaRepository<Sale, Long> {
	
}
