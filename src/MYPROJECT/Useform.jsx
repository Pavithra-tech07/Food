import React, { useState } from 'react'

export default function Useform() {
    const[values,setvalues]=useState({
        username:"",
        email:"",
        password:""
    
    });
    const[error,seterror]=useState({});
    
    const handlechange=(e)=>{
    
    
       const{name,value}=e.target;
       setvalues((prev)=>{
        return{
          ...prev,
          [name]:value,
          
        }
       })
    
    
       return{handlechange,values}
    }
  return (
    <div>
      
    </div>
  )
}
