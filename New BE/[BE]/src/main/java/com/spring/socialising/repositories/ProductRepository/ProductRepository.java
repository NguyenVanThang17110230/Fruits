package com.spring.socialising.repositories.ProductRepository;

import com.spring.socialising.entities.EmployeeEntity;
import com.spring.socialising.entities.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {

    ProductEntity findProductEntitiesByCode(String code);
}
