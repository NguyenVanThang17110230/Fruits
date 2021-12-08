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

    private float total_price;

    private String promotion_code;

    private float promotion_price;

    private float final_price;

    private String receive_name;

    private String receive_phone_number;

    private String receive_address;
}
