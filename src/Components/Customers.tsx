import { FormEvent, useEffect, useState } from "react";
import { Button, Form,Row,Col} from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { addNewCustomer, getByCusId, updateCustomer } from "../Service/CustomerService";
import ListofCustomers from "./ListOfCustomer";
import { setUncaughtExceptionCaptureCallback } from "process";


interface RouteParams{
    id:string;
}
const Customer:React.FC=()=>{
    const{id}=useParams<RouteParams>();
    const history=useHistory();

    const[name,setName]=useState<string>("");
    const[date,setDate]=useState<string>("");
    const[address,setAddress]=useState<string>("");
    const[contactNo,setContactNo]=useState<number>();
    const[quantity4,setQuantity4]=useState<number>();
    const[quantity6,setQuantity6]=useState<number>();
    const[quantity8,setQuantity8]=useState<number>();
    const[totalAmount,setTotalAmount]=useState<number>();
    const[paidAmount,setPaidAmount]=useState<number>();
    const[remainingAmount,setRemainingAmount]=useState<number>();
    const[delivery,setDelivery]=useState<boolean>(false);
    

    useEffect(()=>{
      getByCusId(Number(id)).then((response)=>{
      setName(response.data.name);
      setDate(response.data.date);
      setAddress(response.data.address);
      setQuantity4(response.data.quantity4);
      setQuantity6(response.data.quantity6);
      setQuantity8(response.data.quantity8);
      setContactNo(response.data.contactNo);
      setTotalAmount(response.data.totalAmount);
      setPaidAmount(response.data.paidAmount);
      setRemainingAmount(response.data.remainingAmount);
      setDelivery(response.data.delivery);
    }).catch((error)=>console.error(error))
    },[id] ) ;
    

    const [errors, setErrors] = useState({
       date: "",
       contactNo: ""});
    function validateForm(){
      let valid = true;
      const errorsCopy = { ...errors };
      if (date.trim()) {
        errorsCopy.date = "";
      } else {
        errorsCopy.date = "date is Required";
        valid = false;
      }
      if (contactNo) {
        errorsCopy.contactNo = "";
      } else {
        errorsCopy.date = "date is Required";
        valid = false;
      }
      setErrors(errorsCopy);
      return valid;
    };
    
    
    function saveOrUpdate(e:FormEvent){
    e.preventDefault();
      
    const cus={name,date,contactNo,quantity4,address,
      quantity6,quantity8,totalAmount,paidAmount,remainingAmount,delivery}

    if(validateForm()){
    if(id){
        updateCustomer(Number(id),cus)
        .then((response)=>{
          console.log(response);
          history.push('/listOfCustomers');})
        .catch((error)=>console.error(error));
    }
    else{
      addNewCustomer(cus)
      .then((response)=>{
        console.log(response);
        history.push('/listOfCustomers');})
      .catch((error)=>console.error(error))

    }
  }
    }
      return (
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={name}
              onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridContactNo">
              <Form.Label>Contact NO</Form.Label>
              <Form.Control type="number" placeholder="enter the mobile number" value={contactNo}
              onChange={(e)=>setContactNo(parseInt(e.target.value))}/>
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter the address or location" value={address}
              onChange={(e)=>setAddress(e.target.value)}/>
          </Form.Group>
    
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridQuantity4">
              <Form.Label>4inch-quantity</Form.Label>
              <Form.Control type="number" placeholder="Enter 4inch quantity" value={quantity4}
              onChange={(e)=>setQuantity4(parseInt(e.target.value))}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridQuantity6">
              <Form.Label>6inch-quantity</Form.Label>
              <Form.Control  type="number" placeholder="Enter 6inch quantity"value={quantity6}
              onChange={(e)=>setQuantity6(parseInt(e.target.value))}/>
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridQuantity8">
              <Form.Label>8inch-quantity</Form.Label>
              <Form.Control  type="number" placeholder="Enter 8inch quantity" value={quantity8}
              onChange={(e)=>setQuantity8(parseInt(e.target.value))}/>
            </Form.Group>
          </Row>

          <Row className="mb-3">
           <Form.Group as={Col} controlId="formGridTotalAmount">
             <Form.Label>Total Amount:</Form.Label>
             <Form.Control type="number" placeholder="Enter total amount to pay" value={totalAmount}
              onChange={(e)=>setTotalAmount(parseInt(e.target.value))}/>
           </Form.Group>

           <Form.Group as={Col} controlId="formGridPaidAmount">
             <Form.Label>Paid Amount:</Form.Label>
             <Form.Control  type="number" placeholder="Enter total amount paid" value={paidAmount}
              onChange={(e)=>setPaidAmount(parseInt(e.target.value))}/>
           </Form.Group>
   
           <Form.Group as={Col} controlId="formGridRemainingAmount">
             <Form.Label>Remaining Amount</Form.Label>
             <Form.Control  type="number" placeholder="Enter remaining amount to pay" value={remainingAmount}
              onChange={(e)=>setRemainingAmount(parseInt(e.target.value))}/>
           </Form.Group>
         </Row>

            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date:</Form.Label>
              <Form.Control type="date" placeholder="Enter the date" value={date}
              onChange={(e)=>setDate(e.target.value)}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
          <Form.Label>delivery</Form.Label>
          <Form.Select value={delivery ?"yes" : "no"}
           onChange={(e)=>setDelivery(e.target.value ==="yes")}>
            <option>yes</option>
            <option>no</option>
            </Form.Select>
            </Form.Group>
            </Row>
          <Button variant="primary" type="submit" onClick={(e)=>saveOrUpdate(e)}>
            Submit
          </Button>
        </Form>
      );

}
export default Customer;