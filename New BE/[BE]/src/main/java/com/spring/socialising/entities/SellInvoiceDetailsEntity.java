package com.spring.socialising.entities;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@Table(name = "sell_invoice_details")
public class SellInvoiceDetailsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long id_sell;

    private Long id_product;

    private String code;

    private Integer amount;

    private float price;
}
