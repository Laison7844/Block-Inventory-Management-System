
import { FormEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { addNew, getById, updateById } from "../Service/MightyService";

interface RouteParams{
    id:string
}

const HollowBlocks:React.FC=()=>{
    const {id} = useParams<RouteParams>();

    const [date,setDate]=useState('');
    const [block4Inch,setBlock4Inch]=useState<number>();
    const [block6Inch,setBlock6Inch]=useState<number>();
    const [block8Inch,setBlock8Inch]=useState<number>();
    
    const history=useHistory();
    useEffect(()=>{
      if(id){
         getById(Number(id)).then((response)=>{
          console.log("hi");
         setDate(response.data.date);
         setBlock4Inch(response.data.block4Inch);
         setBlock6Inch(response.data.block6Inch);
         setBlock8Inch(response.data.block8Inch);
          }).catch((error)=>{
            console.error(error);
          })
        }
    },[id])


    const [errors, setErrors] = useState({ date: ""});
    function validateForm(){
      let valid = true;
      const errorsCopy = { ...errors };
      if (date.trim()) {
        errorsCopy.date = "";
      } else {
        errorsCopy.date = "date is Required";
        valid = false;
      }
      setErrors(errorsCopy);
      return valid;
    };
    
    function saveOrUpdate(e:FormEvent){
        e.preventDefault();
       
        if(validateForm()){
        const blocks={date,block4Inch,block6Inch,block8Inch};
        if(id){
          updateById(Number(id),blocks)
          .then((response)=>{
            console.log(response);
            history.push('/');
          }).catch((error)=>console.error(error))
        }
       else{ 
        addNew(blocks).then((response)=>{
          console.log(response);
          history.push('/')
        }).catch((err)=>console.error(err))
       }
      }

    }
  

    return(
        <>
         <div className='container'><br /><br />
          <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
          <div className='card-body'>
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Enter the date" 
         value={date} onChange={(e)=>setDate(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>4-inch-blocks</Form.Label>
        <Form.Control type="number" placeholder="enter today's count" 
        value={block4Inch} onChange={(e)=>setBlock4Inch(parseInt(e.target.value))}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>6-inch-blocks</Form.Label>
        <Form.Control type="number" placeholder="enter today's count" 
        value={block6Inch} onChange={(e)=>setBlock6Inch(parseInt(e.target.value))}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>8-inch-blocks</Form.Label>
        <Form.Control type="number" placeholder="enter today's count" 
        value={block8Inch} onChange={(e)=>setBlock8Inch(parseInt(e.target.value))}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e)=>saveOrUpdate(e)}>
        Submit
      </Button>

    </Form>
    </div>
    </div>
    </div>
    </div>
        </>
    );
}
export default HollowBlocks;