import axios from "axios";

const url="http://localhost:8080/api/blocks"
export const getAll=()=>axios.get(url);
export const getById=(id:number)=>axios.get(url+"/"+id);
export const addNew=(block:any)=>axios.post(url,block);
export const deleteById=(id:number)=>axios.delete(url+"/"+id);
export const updateById=(id:number,block:any)=>axios.put(url+"/"+id,block);
export const deleteBlock4=(quantity:number)=>axios.delete(url+"/delete4/"+quantity);
export const deleteBlock6=(quantity:number)=>axios.delete(url+"/delete6/"+quantity);
export const deleteBlock8=(quantity:number)=>axios.delete(url+"/delete8/"+quantity);
export const addQuantity4=(quantity:number)=>axios.put(url+"/addquantity4/"+quantity);
export const addQuantity6=(quantity:number)=>axios.put(url+"/addquantity6/"+quantity);
export const addQuantity8=(quantity:number)=>axios.put(url+"/addquantity8/"+quantity);
export const getTotalCount=()=>axios.get(url+"/totalcount");