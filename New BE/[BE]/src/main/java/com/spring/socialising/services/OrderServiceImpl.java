package com.spring.socialising.services;

import com.spring.socialising.entities.SellInvoiceDetailsEntity;
import com.spring.socialising.entities.SellInvoiceEntity;
import com.spring.socialising.repositories.SellInvoiceDetailRepository.SellInvoiceDetailRepository;
import com.spring.socialising.repositories.SellInvoiceRepository.SellInvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private SellInvoiceRepository sellInvoiceRepository;

    @Autowired
    private SellInvoiceDetailRepository sellInvoiceDetailRepository;

    @Override
    public List<SellInvoiceEntity> findAll() {
        return sellInvoiceRepository.findAll();
    }

    @Override
    public List<SellInvoiceDetailsEntity> findAllDetailById(Long id) {
        return sellInvoiceDetailRepository.findListByIdSell(id);
    }

    @Override
    public SellInvoiceEntity changeStatusToFinished(Long id) {
        return sellInvoiceRepository.changeStatusToFinished(id);
    }
}
