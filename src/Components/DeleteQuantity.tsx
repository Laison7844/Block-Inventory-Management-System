import { FormEvent, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { deleteBlock4, deleteBlock6, deleteBlock8, getTotalCount } from "../Service/MightyService";
import { error } from "console";

interface RouteParams{
    inch:string
}

const DelOrUpd:React.FC=()=>{

    const {inch}=useParams<RouteParams>();
    const[inches,setInches]=useState<string>("");
    const history=useHistory();

    function deleteStocks(e:FormEvent){
       e.preventDefault();

       const data=parseInt(inches,10);
       if(isNaN(data)){
        console.error("Invalid input. Please enter a valid number.");
        return;
       }

        if(inch=="4"){
            deleteBlock4(Number(data))
            .then(()=>history.push('/stock'))
            .catch((error)=>console.error(error))
        }
        else if(inch=="6"){
            deleteBlock6(Number(data))
            .then(()=>history.push('/stock'))
            .catch((error)=>console.error(error))
        }
        else{
            if(inch=="8"){
                deleteBlock8(Number(data))
                .then(()=>history.push('/stock'))
                .catch((error)=>console.error(error))
            }
        }
    
    }

    return(
        <>
        <div className='container'><br /><br />
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Delete Quantity for {inch}-inch blocks </h3>
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Enter how much quantity to delete :</label>
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
                        deleteStocks(e)}>Submit</button>       
                    </form>
  
                </div>
            </div>
  
        </div>
  
      </div>
      </>
      
    );
}

export default DelOrUpd;