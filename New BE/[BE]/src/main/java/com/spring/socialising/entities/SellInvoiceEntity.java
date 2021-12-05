package com.spring.socialising.entities;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "sell_invoice")
public class SellInvoiceEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long id_account;

    private Long id_customer;

    private String code;

    private LocalDateTime created_time;

    private Integer status;

    private BigDecimal total_price;
}
