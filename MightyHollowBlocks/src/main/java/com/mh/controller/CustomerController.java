package com.mh.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.mh.model.CustomerDetails;
import com.mh.sevice.CustomerService;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
	@Autowired
	CustomerService service;
	
	@GetMapping
	public ResponseEntity<List<CustomerDetails>> getAll(){
		List<CustomerDetails> cus=service.getAllCustomerDetails();
		return new ResponseEntity(cus,HttpStatus.OK);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<CustomerDetails> getById(@PathVariable("id") int id){
		CustomerDetails cus=service.getByIDCustomerDetails(id);
		return new ResponseEntity(cus,HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<String> getById(@RequestBody CustomerDetails cus){
		service.addCustomerDetails(cus);
		return new ResponseEntity("successfully created",HttpStatus.CREATED);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<CustomerDetails> update(@RequestBody CustomerDetails cus,@PathVariable("id") int id){
		CustomerDetails cd=service.updateCustomerDetails(cus,id);
		return new ResponseEntity(cd,HttpStatus.OK);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> delete(@PathVariable("id") int id){
		service.deleteCustomerDetails(id);
		return new ResponseEntity("successfully deleted",HttpStatus.OK);
	}
  
}
