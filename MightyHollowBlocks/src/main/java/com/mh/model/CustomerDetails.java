package com.mh.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int cusId;
	String name;
	long contactNo;
	String address;
	String date;
	int quantity4;
	int quantity6;
	int quantity8;
	boolean delivery;
	int totalAmount;
	int paidAmount;
	int remainingAmount;

}
