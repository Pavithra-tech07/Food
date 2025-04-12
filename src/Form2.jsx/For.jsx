// import React, { useState } from "react";

// const FormDataFetch = () => {
//   // State to store form data
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // Handling input change
//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   // Handling form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Submitted Data:", formData);
//   };

//   return (
//     <div>
//       <h2>Fetch Form Data in React</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <br />

//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <br />

//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <br />

//         <button type="submit">Submit</button>
//       </form>

//       {/* Displaying Submitted Data */}
//       {formData.name && (
//         <div>
//           <h3>Form Data:</h3>
//           <p>Name: {formData.name}</p>
//           <p>Email: {formData.email}</p>
//           <p>Password: {formData.password}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FormDataFetch;
// import React, { useState, useEffect } from 'react';

// export default function FetchData() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users") // Mock API
//             .then((response) => response.json()) // Convert response to JSON
//             .then((json) => setData(json)) // Store data in state
//             .catch((error) => console.error("Error fetching data:", error));
//     }, []); // Empty dependency array runs effect only once

//     return (
//         <div>
//             <h1>User List</h1>
//             <ul>
//                 {data.map((user) => (
//                     <li key={user.id}>{user.name} - {user.email}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }