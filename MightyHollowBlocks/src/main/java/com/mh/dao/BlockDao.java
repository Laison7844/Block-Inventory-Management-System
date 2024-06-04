package com.mh.dao;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mh.model.Blocks;
public interface BlockDao extends JpaRepository<Blocks, Integer>{
     
}
