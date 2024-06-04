package com.mh.sevice;

import java.util.Date;
import java.util.List;

import com.mh.model.Blocks;
import com.mh.model.TotalQuantity;

public interface BlockService {
       public Blocks getByIds(int id);
       public List<Blocks> getAll();
       public String addToday(Blocks bock);
       public Blocks update(int id,Blocks block);
       public String delete(int id);
       public String DecreaseCount4(int inch4);
       public String DecreaseCount6(int inch6);
       public String DecreaseCount8(int inch8);
       public int addQuantity4(int count);
       public int addQuantity6(int count);
       public int addQuantity8(int count);
       public TotalQuantity getAllStock();
}
