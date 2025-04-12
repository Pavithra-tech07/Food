// function

// todo list

import React, { useState } from 'react'

const Todo = () => {

    const [addvalue, setaddvalue] = useState("");
    const [data, setdata] = useState([]);

    const handleadd = () => {
if(!addvalue){
    alert("Enter the value")
      

    }
else{
    setdata([...data, addvalue])
    setaddvalue("")
}    
}
const handleremove=(index) =>{
    alert(index)
    const remove=data.filter((item,indexitem)=>indexitem !==index);
    setdata(remove)

}  
    return (
        <div className='mt-5'>
            <div className='row'>
                <div className='col-md-5'>
                    <div className='d-flex gap-2 align-item-center'>
                        <input type='text' className='form-control' placeholder='type..' onChange={(e) => setaddvalue(e.target.value)} value={addvalue} />
                        <button className='btn btn-sm btn-primary mt-2' onClick={() => handleadd()}>add</button>

                    </div>
                </div>
                <div className='col-md-5'>
                 <ul>
                    {data.map((item,index)=>{
                        return(
                            <>
                             <li>
                                {item}  <button className='btn btn-danger btn-sm' onClick={()=>handleremove(index)}>Remove</button>
                           </li>
                            </>
                        )
                    })}
                   
                 </ul>
                </div>
            </div>
        </div>
    )
}
export default Todo;

