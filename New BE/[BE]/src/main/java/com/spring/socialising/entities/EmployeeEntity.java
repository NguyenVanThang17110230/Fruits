package com.spring.socialising.entities;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "employee")
public class EmployeeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Long id_account;

	private String first_name;

	private String last_name;

	private boolean sex;

	private LocalDateTime dob;

	private String phone_number;

	private String address;

	private String email;

	private String role;
}
