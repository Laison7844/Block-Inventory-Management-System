import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteById, getAll } from "../Service/MightyService";
import { Button, Container, Table } from "react-bootstrap";

type blocks={
    id:number,
    date:string,
    block6Inch:number,
    block4Inch:number,
    block8Inch:number
}

const ListAdded:React.FC=()=>{
    
    const[blockList,setBlockList]=useState<blocks[]>([]);
    const history=useHistory();

    useEffect(()=>{
        listOfBlocks()
    },[]);

    function listOfBlocks(){
        getAll().then((response)=>{
            console.log(response);
           setBlockList(response.data);
        }).catch(error=>{
            console.error(error);
        })   
    }

    function updateById(id:number){
        history.push(`/block/edit/${id}`)
    }

    function deleteOnClick(id:number){
        deleteById(id).then(()=>
        listOfBlocks()
        ).catch((error)=>
        console.error(error));
    }

    const backgroundImageStyle = {
        backgroundColour: 'green',
        backgroundSize: 'cover',   
      };

  return(
       <>
       <div style={backgroundImageStyle}>
         <Container>
            <br/>
            <h3 style={{textAlign:"center"}}> List of Blocks</h3>
            <Link to='/add' className='btn btn-primary mb-2'>Add new</Link>
            <Table  striped bordered hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>4inch blocks</th>
                        <th>6inch blocks</th>
                        <th>8inch blocks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {   blockList.map(block=>
                    <tr key={block.id}>
                        <td>{block.date}</td>
                        <td>{block.block4Inch}</td>
                        <td>{block.block6Inch}</td>
                        <td>{block.block8Inch}</td>
                        <td>
                            <Button variant="warning" onClick={()=>updateById(block.id)}>Update</Button>
                            <Button variant="danger" style={{marginLeft: "10px"}}
                            onClick={()=>deleteOnClick(block.id)}>Delete</Button>
                        </td>
                    </tr>
                    )
                    }
                </tbody>
            </Table>
         </Container>
         </div>
       </>
  );
}

export default ListAdded;
