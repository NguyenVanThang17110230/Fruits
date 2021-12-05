package com.spring.socialising.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "sell_invoice_promotion")
public class SellInvoicePromotionEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long id_sell;

    private Long id_promotion;
}
