// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const products = [
//   { id: 1, name: "Product 1", price: 100 },
//   { id: 2, name: "Product 2", price: 200 },
//   { id: 3, name: "Product 3", price: 150 },
// ];

// export const cartitem=[]

// function Cart() {
//   const [cart, setCart] = useState(cartitem);
//   const [total, setTotal] = useState(0);

  
//   const addToCart = (product) => {
//     setCart((prevCart) => {
//       const updatedCart = [...prevCart, product];
//       calculateTotal(updatedCart);
//       return updatedCart;
//     });
//   };

  
//   const calculateTotal = (cartItems) => {
//     const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
//     setTotal(totalPrice);
//   };

//   return (
//     <div>
//       <h1>Products</h1>
      
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - ₹{product.price}{" "}
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>

//       <h2>Cart</h2>
//       {cart.length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         <ul>
//           {cart.map((item, index) => (
//             <li key={index}>
//               {item.name} - ₹{item.price}
//             </li>
//           ))}
//         </ul>
//       )}
//       <h2>Total: ₹{total}</h2>
//       <Link to="/">
//         <button>Back to Menu</button>
//       </Link>
//     </div>
     
//   );
// }

// export default Cart;





import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";



const products = [
  { id: 1, name: "Dosa", price: 50},
  { id: 2, name: "Idly", price: 30 },
  { id: 3, name: "Chettinad Chiken Curry", price: 150 }

];

export const cartitem = [];

function Cart() {
  const [cart, setCart] = useState(cartitem);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      calculateTotal(updatedCart);
      return updatedCart;
    });
  };

  const calculateTotal = (cartItems) => {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotal(totalPrice);
  };

  return (
    <div className="container mt-4">
      <h1>Your Cart</h1>
      <ul className="list-group">
        {products.map((product) => (
          <li key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
            {product.name} - ₹{product.price}{" "}
            <button
              className="btn btn-primary btn-sm"
              onClick={() => addToCart(product)}
              data-bs-toggle="offcanvas"
              data-bs-target="#cartOffcanvas"
              aria-controls="cartOffcanvas"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      {/* Offcanvas for Cart */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="cartOffcanvas"
        aria-labelledby="cartOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 id="cartOffcanvasLabel">Your Cart</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cart.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <ul className="list-group">
              {cart.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between">


                   <img
                      src={item.img1}
                      alt={item.name}
                      style={{ width: "50px", height: "50px", marginRight: "10px", objectFit: "cover" }}
                    />

                    
                  {item.name} - ₹{item.price}
                </li>
              ))}
            </ul>
          )}
          <h5 className="mt-3">Total: ₹{total}</h5>
        </div>
      </div>

      {/* Back to Menu */}
      <Link to="/menu">
        <button className="btn btn-secondary mt-3">Back to Menu</button>
      </Link>
    </div>
  );
}

export default Cart;
