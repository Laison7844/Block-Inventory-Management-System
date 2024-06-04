import { useEffect, useState } from "react"
import { Button, Container, Table } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { deleteCustomer, getAllcustomerDetails } from "../Service/CustomerService"

type customerdetails={
   cusId:number,
   name:string,
   date:string,
   address:string,
   contactNo:number,
   quantity4:number,
   quantity6:number,
   quantity8:number,
   totalAmount:number,
   paidAmount:number,
   remainingAmount:number
   delivery:boolean
}

const ListofCustomers:React.FC=()=>{
   const[customers,setCustomers]=useState<customerdetails[]>([]);
   const history=useHistory();

   useEffect(()=>{
      listCustomer();
   },[])


   function listCustomer(){
     getAllcustomerDetails()
     .then((response)=>{
     console.log(response);
     setCustomers(response.data)})
     .catch((error)=>console.error(error));
   }

    function updateCus(id:number){
      console.log(id);
       history.push(`/updateCustomer/${id}`)
    }

    function deleteCus(id:number){
      deleteCustomer(id).then(()=>listCustomer())
      .catch((error)=>console.error(error));

    }
   return(
      <>
       <br/>
            <h3 style={{textAlign:"center"}}> Customers Details </h3>
            <Link to={"/addNewCustomer"}  className='btn btn-primary mb-2'> Add New Customer</Link>
            <Table responsive>
               <thead>
                  <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th>4-Quantity</th>
                  <th>6-Quantity</th>
                  <th>8-Quantity</th>
                  <th>Total Amount</th>
                  <th>Paid Amount</th>
                  <th>Remaining Amount</th>
                  <th>Delivery</th>
                  <th>Actions</th>
               </tr>
             </thead>
             <tbody>
             {customers.map(cus=>
               <tr key={cus.cusId}>
                  <td>{cus.name}</td>
                  <td>{cus.contactNo}</td>
                  <td>{cus.address}</td>
                  <td>{cus.date}</td>
                  <td>{cus.quantity4}</td>
                  <td>{cus.quantity6}</td>
                  <td>{cus.quantity8}</td>
                  <td>{cus.totalAmount}</td>
                  <td>{cus.paidAmount}</td>
                  <td>{cus.remainingAmount}</td>
                  <td>{cus.delivery?"yes":"no"}</td>
                  <td>
                     <Button variant="warning" onClick={()=>updateCus(cus.cusId)}>Update</Button>
                     <Button variant="danger" 
                      onClick={()=>deleteCus(cus.cusId)}>Delete</Button>
                  </td>
               </tr>
            ) }
             </tbody>
            </Table>
      </>
   );
}
export default ListofCustomers;