package com.spring.socialising.services;

import com.spring.socialising.entities.SellInvoiceDetailsEntity;
import com.spring.socialising.entities.SellInvoiceEntity;
import org.springframework.stereotype.Service;

import java.util.List;

public interface OrderService {
    List<SellInvoiceEntity> findAll();
    List<SellInvoiceDetailsEntity> findAllDetailById(Long id);
    SellInvoiceEntity changeStatusToFinished(Long id);
}
