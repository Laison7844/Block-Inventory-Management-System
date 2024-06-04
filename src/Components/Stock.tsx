import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getTotalCount } from "../Service/MightyService";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { Button, Container, Table } from "react-bootstrap";

type stock={
    id:number,
    total4:number,
    total6:number,
    total8:number
}

const StockOfBlocks:React.FC=()=>{

       const[stockList,setStockList]=useState<stock[]>([]);
       const history=useHistory();
      
       function getAllStockData(){
        getTotalCount().then((response)=>{
          console.log(response);
            setStockList([response.data]);
        }).catch((error)=>(console.error(error)));
       }

       function decreaseQuantity(inch:number){
           history.push(`/decrease/${inch}`);
       }
       
       function addQuantity(inch:number){
           history.push(`/addQuantity/${inch}`);
       }

       useEffect(()=>{
        getAllStockData();
       },[]);


       return (
        <>
        <Container>
          <br/>
          <h2 style={{ textAlign: "center" }}>Stocks list</h2>
          <br/>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Type</th>
                <th>Stocks Remaining</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>4 inch</th>
                <td>{stockList.length > 0 ? stockList[0].total4 : "Loading..."}</td>
                <td>
                  <Button variant="info" onClick={()=>addQuantity(4)}>Add</Button>
                  <Button variant="danger" style={{ marginLeft: "10px" }}
                  onClick={()=>decreaseQuantity(4)}>Delete</Button>
                </td>
              </tr>
              <tr>
                <th>6 inch</th>
                <td>{stockList.length > 0 ? stockList[0].total6 : "Loading..."}</td>
                <td>
                  <Button variant="info"  onClick={()=>addQuantity(6)}>Add</Button>
                  <Button variant="danger" style={{ marginLeft: "10px" }}
                  onClick={()=>decreaseQuantity(6)}>Delete</Button>
                </td>
              </tr>
              <tr>
                <th>8 inch</th>
                <td>{stockList.length > 0 ? stockList[0].total8 : "Loading..."}</td>
                <td>
                  <Button variant="info"  onClick={()=>addQuantity(8)}>Add</Button>
                  <Button variant="danger" style={{ marginLeft: "10px" }}
                  onClick={()=>decreaseQuantity(8)}>Delete</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </>
      );
}

export default StockOfBlocks;