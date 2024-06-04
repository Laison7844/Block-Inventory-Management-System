package com.mh.model;

import java.util.Date;
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
@Table(name="blocks")
public class Blocks {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
	String date;
	int block6Inch;
	int block4Inch;
	int block8Inch;
	
	

}
