package com.spring.socialising.repositories.CustomerRepository;

import com.spring.socialising.entities.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerEntity, Integer> {
    @Query(value = "select CE from CustomerEntity CE where CE.id_account = :id")
    CustomerEntity findCustomerEntityByIdAccount(@Param("id") Long id);
}
