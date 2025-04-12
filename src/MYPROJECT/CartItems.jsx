import React from "react";

const CartItems = ({ cart, totalPrice }) => {
  return (
    <div>
      {cart.length > 0 ? (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li className="list-group-item" key={index}>
              <div className="d-flex align-items-center">
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
                <div>
                  <h5>{item.title}</h5>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty!</p>
      )}
      <hr />
      <h5>Total: ${totalPrice}</h5>
    </div>
  );
};

export default CartItems;



// import React from "react";

// const CartItems = ({ cart, totalPrice }) => {
//   return (
//     <div>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           <ul className="list-group">
//             {cart.map((item, index) => (
//               <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//                 {item.title}
//                 <span className="badge bg-primary rounded-pill">₹10</span>
//               </li>
//             ))}
//           </ul>
//           <h4 className="mt-3">Total Price: ₹{totalPrice}</h4>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartItems;
