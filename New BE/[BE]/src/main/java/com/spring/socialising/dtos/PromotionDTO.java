package com.spring.socialising.dtos;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class PromotionDTO {
    private Long id;

    private String code;

    private String name;

    private String description;

    private BigDecimal price;

    private String start_date;

    private String end_date;
}
