import axios from "axios"

const url="http://localhost:8080/api/customer"
export const getAllcustomerDetails=()=>axios.get(url);
export const addNewCustomer=(customerdetails:any)=>axios.post(url,customerdetails);
export const getByCusId=(id:number)=>axios.get(url+"/"+id);
export const updateCustomer=(id:number,customerdetails:any)=>axios.put(url+"/"+id,customerdetails);
export const deleteCustomer=(id:number)=>axios.delete(url+"/"+id);