package com.spring.socialising.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
public class CustomerDTO {
    private String username;

    private String password;

    private String first_name;

    private String last_name;

    private boolean sex;

    private String dob;

    private String phone_number;

    private String address;

    private String email;
}
