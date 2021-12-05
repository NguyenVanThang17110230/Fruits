package com.spring.socialising.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "supplier")
public class SupplierEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String phone_number;

    @Column
    private String address;
}
