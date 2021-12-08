package com.spring.socialising.entities;

import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Data
@Table(name = "product")
public class ProductEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private Long id_supplier;

	private Long id_category;

	private String code;

	private String name;

	private String image;

	private Integer amount;

	private String short_description;

	private String long_description;

	private float purchase_price;

	private float price;
}
