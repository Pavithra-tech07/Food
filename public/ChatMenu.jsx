// import React, { useState } from "react";
// import CartItems from "./CartItems"; 
// import food from "./menuItems.json";

// const ChatMenu = () => {
//   const [cart, setCart] = useState([]);
//   const [data, setData] = useState(food); 

//   const addToCart = (item) => {
//     setCart((prevCart) => [...prevCart, item]);
//     alert(`${item.title} added to cart!`);
//   };

//   const totalPrice = cart.length * 10;

//   return (
//     <div>
//       {/* Cart Button */}
//       <div className="ms-auto d-flex align-items-center">
//         <button
//           className="btn fs-5 d-flex align-items-center me-3"
//           type="button"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasCart"
//           aria-controls="offcanvasCart"
//         >
//           <i className="bi bi-cart4 fs-1"></i>
//           <span className="badge bg-danger ms-2">{cart.length}</span>
//         </button>
//       </div>

//       {/* Menu */}
//       <div className="container pt-5">
//         <h3 className="text-center">South Indian</h3>
//         <div className="row row-cols-1 row-cols-md-5 g-4">
//           {data.map((item) => {
//             if (item.category === "South Indian") {
//               return (
//                 <div className="col" key={item.id}>
//                   <div className="card h-100">
//                     <img
//                       src={`/images/${item.img}`} 
//                       className="card-img-top"
//                       alt={item.title}
//                     />
//                     <div className="card-body">
//                       <h5 className="card-title">{item.title}</h5>
//                       <p className="card-text">{item.description}</p>
//                       <button
//                         className="btn btn-danger"
//                         onClick={() => addToCart(item)}
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             }
           
//           })}
//         </div>
//       </div>

//       {/* Offcanvas Cart */}
//       <div
//         className="offcanvas offcanvas-end"
//         tabIndex="-1"
//         id="offcanvasCart"
//         aria-labelledby="offcanvasCartLabel"
//       >
//         <div className="offcanvas-header">
//           <h5 id="offcanvasCartLabel">Your Cart</h5>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="offcanvas-body">
//           <CartItems cart={cart} totalPrice={totalPrice} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatMenu;





import React, { useEffect, useState } from "react";
import CartItems from "./CartItems"; 
import food from "./menuItems.json"

const ChatMenu = () => {
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("src/menuItems.json")
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
        console.log(jsonData);
      })
      .catch((error) => console.error("Error fetching menu data:", error));
  }, []);

  console.log(data);
  

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item.title} added to cart!`);
  };

  // Calculate total price (assuming each item costs $10 for simplicity)
  const totalPrice = cart.length * 10;

  return (
    <div>
      {/* Cart Button */}
      <div className="ms-auto d-flex align-items-center">
        <button
          className="btn fs-5 d-flex align-items-center me-3"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasCart"
          aria-controls="offcanvasCart"
        >
          <i className="bi bi-cart4 fs-1"></i>
          <span className="badge bg-danger ms-2">{cart.length}</span>
        </button>
      </div>

      {/* Menu */}
      <div className="container pt-5">
        <h3 className="text-center">South Indian</h3>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {data.map((item) => {
            if (item.category === "South Indian") {
              return (
                <div className="col" key={item.id}>
                  <div className="card h-100">
                    {/* Access images from the public folder using a relative URL */}
                    <img
                      src={`/images/${item.img}`} // Use relative URL
                      className="card-img-top"
                      alt={item.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                      <button
                        className="btn btn-danger"
                        onClick={() => addToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
            return null; // Return null for items that don't match the category
          })}
        </div>
      </div>

      {/* Offcanvas Cart */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasCart"
        aria-labelledby="offcanvasCartLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasCartLabel">Your Cart</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <CartItems cart={cart} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default ChatMenu;
