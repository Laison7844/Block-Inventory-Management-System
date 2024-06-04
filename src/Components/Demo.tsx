import { useEffect, useState } from "react";
import { error } from "console";
import axios from "axios";
const Demo:React.FC=()=>{
    const[names,setName]=useState<string>("");
    const id=2;

    useEffect(()=>{
        console.log("inside useEffect");
        axios.get(`http://localhost:8080/api/customer/${id}`)
        .then(res=>{
            setName(res.data.name);
            console.log("inside then");
        })
        .catch(error=>{
        console.error(error)
    })
},[id]);

    return(
        <>
        {names}
        </>
    );
}

export default Demo;