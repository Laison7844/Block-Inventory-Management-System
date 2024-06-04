package com.mh.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mh.model.CustomerDetails;

public interface CustomerDao extends JpaRepository<CustomerDetails, Integer>{

}
