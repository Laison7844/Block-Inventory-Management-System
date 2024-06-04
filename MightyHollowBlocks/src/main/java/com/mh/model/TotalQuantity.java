package com.mh.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="totalCount")
public class TotalQuantity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
   int id;
   int total4;
   int total6;
   int total8;
}
