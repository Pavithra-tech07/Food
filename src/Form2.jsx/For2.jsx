

// FORM data fetch

// import React, { useState } from 'react'

// export default function Form() {

//     const [formData, setFormData]=useState({
//         name:"",
//         email:"",
//         password:""
//     });

//     const handleChange=(event)=>{
//         setFormData({
//             ...formData,
//             [event.target.name]: event.target.value
//         });
//     };
    
//         const handleSubmit = (event) => {
//             event.preventDefault();
//             console.log("submitted data:", formData)


//         }
        



   
//   return (
//     <div>
//      <form onSubmit={handleSubmit} >
//        <label htmlFor="">Name:</label>
//        <input type="text" name='name' value={formData.name} onChange={handleChange} /><br />
//        <label htmlFor="">password:</label>
//        <input type="password" name='password' value={formData.password} onChange={handleChange} /> <br />
//        <label htmlFor="">Email:</label>
//        <input type="email" name='email' value={formData.email} onChange={handleChange} />
//       <button type='submit'>Submit</button>
//      </form>
//      {formData && (
//         <div>
//             <h1>FormData</h1>
//             <h2>Name:{formData.name}</h2>
//             <h2>Password:{formData.password}</h2>
//             <h2>Email:{formData.email}</h2>
//         </div>
//      )
//      }
//     </div>
//   )
// }



// API Fetch


