package com.spring.socialising.entities.response;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class StatisData {
    private Long countCustomer;

    private Long countProduct;

    private Long countOrderInvoice;

    private BigDecimal totalPriceOrderValue;
}
