package com.spring.socialising.repositories.SellInvoiceRepository;

import com.spring.socialising.entities.SellInvoiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.math.BigDecimal;

public interface SellInvoiceRepository extends JpaRepository<SellInvoiceEntity, Long> {
    @Query("SELECT SUM(total_price) FROM SellInvoiceEntity")
    BigDecimal getTotalInvoiceValue();
}
