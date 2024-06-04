package com.mh.sevice.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mh.dao.CustomerDao;
import com.mh.dao.TotalDao;
import com.mh.exception.ResourceNotFoundException;
import com.mh.model.CustomerDetails;
import com.mh.model.TotalQuantity;
import com.mh.sevice.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService{
    @Autowired
	CustomerDao customer;
    
    @Autowired
    TotalDao dao;
	
	public List<CustomerDetails> getAllCustomerDetails() {
			return customer.findAll();
	}

	
	public CustomerDetails getByIDCustomerDetails(int id) {
		CustomerDetails cus=customer.findById(id).orElseThrow(()->
				new ResourceNotFoundException("customer is not exists with a given id: " + id));
		return cus;
	}

	@Override
	public void addCustomerDetails(CustomerDetails cus) {
		TotalQuantity tc=dao.findById(1).orElseThrow();
	     tc.setTotal4(tc.getTotal4()-cus.getQuantity4());
	     tc.setTotal6(tc.getTotal6()-cus.getQuantity6());
	     tc.setTotal8(tc.getTotal8()-cus.getQuantity8());
	     dao.save(tc);
		 customer.save(cus);
	}

	
	public CustomerDetails updateCustomerDetails(CustomerDetails cus, int id) {
		CustomerDetails cd=customer.findById(id).orElseThrow(()->
		               new ResourceNotFoundException("customer does not exists"+id));
		TotalQuantity tc=dao.findById(1).orElseThrow();
		
		   tc.setTotal4(tc.getTotal4()+cd.getQuantity4());
		   tc.setTotal6(tc.getTotal6()+cd.getQuantity6());
		   tc.setTotal8(tc.getTotal8()+cd.getQuantity8());
		
		cd.setAddress(cus.getAddress());
		cd.setDate(cus.getDate());
		cd.setDelivery(cus.isDelivery());
		cd.setName(cus.getName());
		cd.setContactNo(cus.getContactNo());
		cd.setQuantity4(cus.getQuantity4());
		cd.setQuantity6(cus.getQuantity6());
		cus.setQuantity8(cus.getQuantity8());
		cd.setTotalAmount(cus.getTotalAmount());
		cd.setPaidAmount(cus.getPaidAmount());
		cd.setRemainingAmount(cus.getRemainingAmount());
		
	     tc.setTotal4(tc.getTotal4()-cus.getQuantity4());
	     tc.setTotal6(tc.getTotal6()-cus.getQuantity6());
	     tc.setTotal8(tc.getTotal8()-cus.getQuantity8());
	     dao.save(tc);
	     
		customer.save(cd);
		return cd;
	}

	public void deleteCustomerDetails(int id) {
		CustomerDetails cd=customer.findById(id).orElseThrow(()->
          new ResourceNotFoundException("customer does not exists"+id));
		
         TotalQuantity tc=dao.findById(1).orElseThrow();
         
	     tc.setTotal4(tc.getTotal4()+cd.getQuantity4());
	     tc.setTotal6(tc.getTotal6()+cd.getQuantity6());
	     tc.setTotal8(tc.getTotal8()+cd.getQuantity8());
	     dao.save(tc);
	     
		customer.delete(cd);
		
	}

}
