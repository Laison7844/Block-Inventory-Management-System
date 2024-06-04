package com.mh.sevice.impl;
import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mh.exception.ResourceNotFoundException;
import com.mh.dao.BlockDao;
import com.mh.dao.TotalDao;
import com.mh.model.Blocks;
import com.mh.model.TotalQuantity;
import com.mh.sevice.BlockService;

@Service
public class BlocksServiceImple implements BlockService{
	@Autowired
	BlockDao dao;
	@Autowired
	TotalDao totalDao;
	
	public Blocks getByIds(int id) {
		Blocks block=dao.findById(id).orElseThrow(  
				() -> new ResourceNotFoundException("That block is not exists with a given id: " + id));
		System.out.println("hello");
				return block;
	}
	public List<Blocks> getAll() {
		return dao.findAll();
	}
	
	public String addToday(Blocks block) {
		  dao.save(block);
		int id=1;
		TotalQuantity tc=totalDao.findById(id).orElseThrow();
		tc.setTotal4(tc.getTotal4()+block.getBlock4Inch());
		tc.setTotal6(tc.getTotal6()+block.getBlock6Inch());
		tc.setTotal8(tc.getTotal8()+block.getBlock8Inch());
		
		
		 totalDao.save(tc);
	   
		return "Add successfully";
	}

	
	public Blocks update(int id,Blocks block) {
	    Blocks blo=dao.findById(id).orElseThrow(		
	    		() -> new ResourceNotFoundException("That block is not exists with a given id: " + id));
	    TotalQuantity tq=totalDao.findById(1).orElseThrow();
	    
	    tq.setTotal4(tq.getTotal4()-blo.getBlock4Inch());
	    tq.setTotal6(tq.getTotal6()-blo.getBlock6Inch());
	    tq.setTotal8(tq.getTotal8()-blo.getBlock8Inch());
	    totalDao.save(tq);
	    
	    blo.setBlock4Inch(block.getBlock4Inch());
	    blo.setBlock6Inch(block.getBlock6Inch());
	    blo.setBlock8Inch(block.getBlock8Inch());
	    dao.save(blo);
	    
	    tq.setTotal4(tq.getTotal4()+block.getBlock4Inch());
	    tq.setTotal6(tq.getTotal6()+block.getBlock6Inch());
	    tq.setTotal8(tq.getTotal8()+block.getBlock8Inch());
	    totalDao.save(tq);
	    
	    
		return blo;
	}

   public String delete(int id) {
	   Blocks block=dao.findById(id).orElseThrow(
			   () -> new ResourceNotFoundException("That block is not exists with a given id: " + id));
	   TotalQuantity tc=totalDao.findById(1).orElseThrow();
	   tc.setTotal4(tc.getTotal4()-block.getBlock4Inch());
	   tc.setTotal6(tc.getTotal6()-block.getBlock6Inch());
	   tc.setTotal8(tc.getTotal8()-block.getBlock8Inch());
	       dao.delete(block);
	   return "deleted successfully";
   }
   
	public String DecreaseCount4(int inch4) {
		TotalQuantity tc= totalDao.findById(1).orElseThrow();
	        tc.setTotal4(tc.getTotal4()-inch4);
	        totalDao.save(tc);
	        return "done";
	         }
	
	public String DecreaseCount6(int inch6) {
		TotalQuantity tc= totalDao.findById(1).orElseThrow();
        tc.setTotal6(tc.getTotal6()-inch6);
        totalDao.save(tc);
        return "done";
         }

	public String DecreaseCount8(int inch8) {
		TotalQuantity tc= totalDao.findById(1).orElseThrow();
        tc.setTotal8(tc.getTotal8()-inch8);
        totalDao.save(tc);
        return "done";
         }

	
	public int addQuantity4(int count) {
		TotalQuantity tc=totalDao.findById(1).orElseThrow();
          tc.setTotal4(tc.getTotal4()+count);
          totalDao.save(tc);
          return tc.getTotal4();
	}

	public int addQuantity6(int count) {
		TotalQuantity tc=totalDao.findById(1).orElseThrow();
	     tc.setTotal6(tc.getTotal6()+count);
	     totalDao.save(tc);
         return tc.getTotal6();
	}

	
	public int addQuantity8(int count) {
		TotalQuantity tc=totalDao.findById(1).orElseThrow();
	     tc.setTotal8(tc.getTotal8()+count);
	     totalDao.save(tc);
         return tc.getTotal8();
}
	
	public TotalQuantity getAllStock() {
		 return totalDao.findById(1).orElseThrow();
	}
}
