import { FormEvent, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { addQuantity4, addQuantity6, addQuantity8 } from "../Service/MightyService";

interface RouteParams{
    inch:string;
}
const AddStockQunatity:React.FC=()=>{

     const[inches,setInches]=useState<string>("");
     const history=useHistory();
     const {inch}=useParams<RouteParams>();


     function addStocks(e:FormEvent){
        e.preventDefault();
      const data=parseInt(inches,10);
   
      if(inch=="4"){
        addQuantity4(data)
        .then(()=>history.push('/stock'))
        .catch((error)=>console.error(error));
      }
    else if (inch=="6"){
        addQuantity6(data)
        .then(()=>history.push('/stock'))
        .catch((error)=>console.error(error));
    }
    else{
        addQuantity8(data)
        .then(()=>history.push('/stock'))
        .catch((error)=>console.error(error));
    }
     }

    return(<>
   <div className='container'><br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Add Quantity for {inch}-inch blocks </h3>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Enter how much quantity to add :</label>
                            <input
                              type='text'
                              name='Number'
                              placeholder='Enter here'
                              className='form-control'
                              value={inches}
                              onChange={(e) => setInches(e.target.value)}
                            >
                            </input>
                        </div>
                        <button className='btn btn-success mb-2' onClick={(e)=>
                        addStocks(e)}>Submit</button>       
                    </form>
  
                </div>
            </div>
  
        </div>
  
      </div>
      </>
    );
}
export default AddStockQunatity;