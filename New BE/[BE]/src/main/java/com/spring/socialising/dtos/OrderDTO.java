package com.spring.socialising.dtos;

import com.spring.socialising.entities.ProductEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
    private String receive_name;

    private String receive_phone_number;

    private String receive_address;

    private String promotion_code;

    private List<ProductEntity> product_list;
}
