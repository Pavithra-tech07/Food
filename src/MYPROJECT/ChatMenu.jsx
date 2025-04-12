// import React, { useEffect, useState } from "react";
// import CartItems from "./CartItems";

// const ChatMenu = () => {
//   const [cart, setCart] = useState([]);
//   const [southIndian, setSouthIndian] = useState([]);
//   const [northIndian, setNorthIndian] = useState([]);
//   const [chinese, setChinese] = useState([]);
//   const [thailand, setThailand] = useState([]);
//   const [searchlist, setSearchlist] = useState("");

//   useEffect(() => {
//     fetch("/menuItems.json")
//       .then((res) => res.json())
//       .then((data) => setSouthIndian(data))
//       .catch((err) => console.error("Error fetching South Indian food:", err));

//     fetch("/menuitem2.json")
//       .then((res) => res.json())
//       .then((data) => setNorthIndian(data))
//       .catch((err) => console.error("Error fetching North Indian food:", err));

//     fetch("/menuitem3.json")
//       .then((res) => res.json())
//       .then((data) => setChinese(data))
//       .catch((err) => console.error("Error fetching Chinese food:", err));

//     fetch("/menuitem4.json")
//       .then((res) => res.json())
//       .then((data) => setThailand(data))
//       .catch((err) => console.error("Error fetching Thailand food:", err));
//   }, []);

//   // Add to Cart Function
//   const addToCart = (item) => {
//     setCart((prevCart) => [...prevCart, item]);
//     alert(`${item.title} added to cart!`);
//   };

//   const totalPrice = cart.length * 10;

//   // Function to filter and display categorized menu items

//   const renderCategory = (category, title) => {
//     const filteredItems = category.filter((item) =>
//       item.title.toLowerCase().includes(searchlist.toLowerCase())
//     );

//     return filteredItems.length > 0 ? (
//       <div className="mt-5 pt-4">
//         <h3 className="text-center text-danger">{title}</h3>
//         <div className="row row-cols-1 row-cols-md-3 g-4">
//           {filteredItems.map((item) => (
//             <div className="col" key={item.id}>
//               <div className="card h-100">
//                 <img src={item.img} className="card-img-top" alt={item.title} />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.title}</h5>
//                   <p className="card-text">{item.description}</p>
//                   <button className="btn btn-danger" onClick={() => addToCart(item)}>
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     ) : null;
//   };

//   return (
//     <div>
//       {/* Search Bar */}
//       <div className="col">
//         <div className="row mt-5 pt-5">
//       <div className="container mt-5 pt-5">
//         <input
//           type="text"
//           placeholder="Search Food"
//           value={searchlist}
//           onChange={(e) => setSearchlist(e.target.value)}
//           className="form-control w-50 mx-auto"
//         />
//       </div>
//       </div>
//       </div>

//       {/* Render Categories */}
//       <div className="container mt-3">
//         {renderCategory(southIndian, "South Indian")}
//         {renderCategory(northIndian, "North Indian")}
//         {renderCategory(chinese, "Chinese")}
//         {renderCategory(thailand, "Thailand")}
//       </div>

//       {/* Cart Button */}
//       <div className="position-fixed z-3" style={{ position: "absolute", top: "10px", right: "150px" }}>
//         <button
//           className="btn fs-5 d-flex align-items-center"
//           type="button"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#offcanvasCart"
//           aria-controls="offcanvasCart"
//         >
//           <i className="bi bi-cart4 fs-1"></i>
//           <span className="badge bg-danger ms-2">{cart.length}</span>
//         </button>
//       </div>

//       {/* Offcanvas Cart */}
//       <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart" aria-labelledby="offcanvasCartLabel">
//         <div className="offcanvas-header">
//           <h5 id="offcanvasCartLabel">Your Cart</h5>
//           <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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

const ChatMenu = () => {
  const [cart, setCart] = useState([]);
  const [southIndian, setSouthIndian] = useState([]);
  const [northIndian, setNorthIndian] = useState([]);
  const [chinese, setChinese] = useState([]);
  const [thailand, setThailand] = useState([]);
  const [searchlist, setSearchlist] = useState("");

  useEffect(() => {
    // Fetch the menu items
    fetch("/menuItems.json")
      .then((res) => res.json())
      .then((data) => setSouthIndian(data))
      .catch((err) => console.error("Error fetching South Indian food:", err));

    fetch("/menuitem2.json")
      .then((res) => res.json())
      .then((data) => setNorthIndian(data))
      .catch((err) => console.error("Error fetching North Indian food:", err));

    fetch("/menuitem3.json")
      .then((res) => res.json())
      .then((data) => setChinese(data))
      .catch((err) => console.error("Error fetching Chinese food:", err));

    fetch("/menuitem4.json")
      .then((res) => res.json())
      .then((data) => setThailand(data))
      .catch((err) => console.error("Error fetching Thailand food:", err));
  }, []);

  // Add to Cart Function
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    alert(`${item.title} added to cart!`);
  };

  // Calculate total price based on the items in the cart
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Function to filter and display categorized menu items
  const renderCategory = (category, title) => {
    const filteredItems = category.filter((item) =>
      item.title.toLowerCase().includes(searchlist.toLowerCase())
    );

    return filteredItems.length > 0 ? (
      <div className="mt-5 pt-4">
        <h3 className="text-center text-danger">{title}</h3>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredItems.map((item) => (
            <div className="col" key={item.id}>
              <div className="card h-100">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-price">Price: ₹{item.price}</p>
                  <button className="btn btn-danger" onClick={() => addToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : null;
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="col">
        <div className="row mt-5 pt-5">
          <div className="container mt-5 pt-5">
            <input
              type="text"
              placeholder="Search Food"
              value={searchlist}
              onChange={(e) => setSearchlist(e.target.value)}
              className="form-control w-50 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Render Categories */}
      <div className="container mt-3">
        {renderCategory(southIndian, "South Indian")}
        {renderCategory(northIndian, "North Indian")}
        {renderCategory(chinese, "Chinese")}
        {renderCategory(thailand, "Thailand")}
      </div>

      {/* Cart Button */}
      <div className="position-fixed z-3" style={{ position: "absolute", top: "10px", right: "150px" }}>
        <button
          className="btn fs-5 d-flex align-items-center"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasCart"
          aria-controls="offcanvasCart"
        >
          <i className="bi bi-cart4 fs-1"></i>
          <span className="badge bg-danger ms-2">{cart.length}</span>
        </button>
      </div>

      {/* Offcanvas Cart */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasCart" aria-labelledby="offcanvasCartLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasCartLabel">Your Cart</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <CartItems cart={cart} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default ChatMenu;

