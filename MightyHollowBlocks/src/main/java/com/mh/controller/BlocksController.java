package com.mh.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mh.model.Blocks;
import com.mh.model.TotalQuantity;
import com.mh.sevice.BlockService;
import com.mh.sevice.impl.BlocksServiceImple;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/blocks")
public class BlocksController {
     @Autowired
	BlockService service;
     
     @GetMapping
     public ResponseEntity<List<Blocks>> getAll(){
    	 List<Blocks> list=service.getAll();
    	 return new ResponseEntity(list,HttpStatus.OK);
     }
     
     @GetMapping("/totalcount")
     public ResponseEntity<TotalQuantity> getTotal(){
    	TotalQuantity tc=service.getAllStock();
    	 return new ResponseEntity(tc,HttpStatus.OK);
     }
     
     @PostMapping
     public ResponseEntity<String> addTodayStatus(@RequestBody Blocks block){
    	  String s=service.addToday(block);
    	  return new ResponseEntity(s,HttpStatus.CREATED);
     }
     
     @GetMapping("{id}")
     public ResponseEntity<Blocks> getParticular(@PathVariable("id") int id){
    	 Blocks block=service.getByIds(id);
    	  return new ResponseEntity(block,HttpStatus.OK);
     }
     
     @PutMapping("{id}")
     public ResponseEntity<Blocks> update(@RequestBody Blocks blo, @PathVariable("id") int id){
    	 Blocks block=service.update(id, blo);
    	  return new ResponseEntity(block,HttpStatus.OK);
     }
     
     
     @PutMapping("/addquantity4/{count}")
     public ResponseEntity<Integer> increase4(@PathVariable("count") int co){
    	 int added=service.addQuantity4(co);
    	  return new ResponseEntity(added,HttpStatus.OK);
     }

     @PutMapping("/addquantity6/{count}")
     public ResponseEntity<Integer> increase6(@PathVariable("count") int co){
    	 int added=service.addQuantity6(co);
    	  return new ResponseEntity(added,HttpStatus.OK);
     }

     @PutMapping("/addquantity8/{count}")
     public ResponseEntity<Integer> increase8(@PathVariable("count") int co){
    	 int added=service.addQuantity8(co);
    	  return new ResponseEntity(added,HttpStatus.OK);
     }

     
     @DeleteMapping("{id}")
     public ResponseEntity<String> delete(@PathVariable("id") int id){
    	 String s=service.delete(id);
    	  return new ResponseEntity(s,HttpStatus.OK);
     }
     
     @DeleteMapping("/delete4/{count}")
     public ResponseEntity<String> delete4(@PathVariable("count") int count){
    	 String s=service.DecreaseCount4(count);
    	  return new ResponseEntity(s,HttpStatus.OK);
     }
     
     @DeleteMapping("/delete6/{count}")
     public ResponseEntity<String> delete6(@PathVariable("count") int count){
    	 String s=service.DecreaseCount6(count);
    	  return new ResponseEntity(s,HttpStatus.OK);
     }
     
     @DeleteMapping("/delete8/{count}")
     public ResponseEntity<String> delete8(@PathVariable("count") int count){
    	 String s=service.DecreaseCount8(count);
    	  return new ResponseEntity(s,HttpStatus.OK);
     }
     }

