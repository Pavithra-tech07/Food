import React, { useEffect, useState } from 'react'
// import meuItems from './menuItems'


export default function Form() {
    const [view,setView]= useState([]);

    useEffect(()=>{
        fetch('/menuItems.json')
        .then((res)=>{return res.json()})
        .then(data=>{setView(data)})
    },[])

    console.log(view);
    
  return (
    <div>
      <h1>soth idian</h1>
      <div>
        {/* {meuItems.map((items)=>(
            <>           
             <li key={items}>{items.id}</li>
            <li key={items}>{items.title}</li>
             <li> <img
                      src={require(`${items.img1}`)} // Dynamic image import
                    
                    /></li> 
            </>

        ))} */}
      </div>
    </div>
  )
}
