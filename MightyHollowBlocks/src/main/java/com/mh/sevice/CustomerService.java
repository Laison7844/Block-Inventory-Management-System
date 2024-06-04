package com.mh.sevice;

import java.util.List;

import com.mh.model.CustomerDetails;

public interface CustomerService {
     public List<CustomerDetails> getAllCustomerDetails();
     public CustomerDetails getByIDCustomerDetails(int id);
     public void addCustomerDetails(CustomerDetails cus);
     public CustomerDetails updateCustomerDetails(CustomerDetails cus,int id);
     public void deleteCustomerDetails(int id);
     
}
