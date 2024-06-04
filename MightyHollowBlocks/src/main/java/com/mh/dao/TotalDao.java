package com.mh.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mh.model.TotalQuantity;

public interface TotalDao extends JpaRepository<TotalQuantity, Integer> {

}
