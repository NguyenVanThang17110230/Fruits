package com.spring.socialising.entities;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@Table(name = "purchase_invoice_details")
public class PurchaseInvoiceDetailsEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long id_purchase;

    private Long id_product;

    private String code;

    private int amount;

    private float price;
}
