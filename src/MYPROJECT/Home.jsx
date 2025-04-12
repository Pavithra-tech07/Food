import React,{useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './Home.css';

export default function Home() {

  const [values, setValues] = useState({
      username: "",
      email: "",
      password: ""
    });
  
    
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setValues((prev) => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      let validationErrors = {};
  
      // Username validation
      if (!values.username.trim()) {
        validationErrors.username = "Username is required.";
      }
  
      // Email validation
      if (!values.email.trim()) {
        validationErrors.email = "Email is required.";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        validationErrors.email = "Invalid email address.";
      }
  
      // Password validation
      if (!values.password.trim()) {
        validationErrors.password = "Password is required.";
      } else if (values.password.length < 6) {
        validationErrors.password = "Password must be at least 6 characters.";
      }
  
      setErrors(validationErrors);
  
      // Only log values if no errors
      if (Object.keys(validationErrors).length === 0) {
        console.log(values);
      }
    };
  return (
    <div>
    <div className="main">
            <div className="row">
              <div className="col">
                <nav className="navbar navbar-expand-lg bg-warning position-fixed">
                  <div className="container-fluid">
                    <img
                      src={"images/logo.png"}
                      alt="Brand Logo"
                      width="80"
                      height="80"
                      className="d-inline-block align-text-top mx-5"
                    />
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul className="navbar-nav ms-5">
                        <li className="nav-item mx-3">
                          <Link className="nav-link fs-5" to="/home">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item mx-3">
                          <Link className="nav-link fs-5" to="/about">
                            About
                          </Link>
                        </li>
                        <li className="nav-item mx-3">
                          <Link className="nav-link fs-5" to="/menu">
                            Menu
                          </Link>
                        </li>
                        <li className="nav-item mx-3">
                          <Link className="nav-link fs-5" to="/contact">
                            Contact
                          </Link>
                        </li>
                      </ul>
    
                      <div className="ms-auto d-flex align-items-center">
                        {/* <button
                          className="btn fs-5 d-flex align-items-center me-3"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasCart"
                          aria-controls="offcanvasCart"
                        >
                          <i className="bi bi-cart4 fs-1"></i>
                        </button> */}
                        <button
                          className="btn btn-outline-danger fs-5"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasSignIn"
                          aria-controls="offcanvasSignIn"
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
    
            {/* Offcanvas for Cart */}
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasCart"
              aria-labelledby="offcanvasCartLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasCartLabel">
                  Your Cart
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <p>Your cart is empty!</p>
              </div>
            </div>
    
            {/* Offcanvas for Sign In */}
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasSignIn"
              aria-labelledby="offcanvasSignInLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasSignInLabel">
                  Sign In
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <form className="form" onSubmit={handleSubmit}>
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-input"
                    placeholder="Enter your username"
                    onChange={handleChange}
                    value={values.username}
                  />
                  {errors.username && <p className="text-danger">{errors.username}</p>}
                  <br />
    
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && <p className="text-danger">{errors.email}</p>}
                  <br />
    
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-input"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {errors.password && <p className="text-danger">{errors.password}</p>}
                  <br /><br/>
    
              <button className="form-btn" type="submit" >
                    Sign Up
                  </button>
    
                  <br /> <br />
                  <span className="form-input-login">
                    Already have an Account? Login <Link to="/login">here</Link>
                  </span>
                </form>
              </div>
            </div>
    

    <img src={"/images/wallpaper.avif"} class="img-fluid mt-5" alt="..."/>
      

      <div className="row mt-5 mx-4">
        <h4 style={{ color: 'red' }}>Welcome to TastyTables - A Feast for Every Taste!</h4>
        <p className="para1 mx-3 mt-3 fs-5">
          At TastyTables, we believe every meal is an opportunity to create unforgettable moments.
          Our passion is bringing you a variety of delicious, wholesome, and mouthwatering recipes
          that make cooking a joy and dining a delight.
        </p>
      </div>
      <div className="row mt-5 mx-4">
        <h4 style={{ color: 'red' }}>Discover Your Flavor in Every Bite</h4>
        <p className="para1 mx-3 mt-3 fs-5">
        Unlock a world of delicious possibilities with every recipe. From bold spices to fresh ingredients, our dishes promise to bring new flavors to your table, one bite at a time
        </p>
      </div>

      <div className="row mt-5 mx-4">
        <h4 style={{ color: 'red' }}>Why Choose TastyTables?</h4>
        <p className="para1 mx-3 mt-3 fs-5">
       <span className="span" style={{color:'black'}}> Easy-to-Follow Recipes:</span> Simplified steps with ingredients you can find at any store.
        </p>
        <p className="para1 mx-3 mt-3 fs-5">
     <span className="span" style={{color:'black'}}>  Diverse Cuisine:</span>  Explore dishes from around the globe.      
       </p>
       <p className="para1 mx-3 mt-3 fs-5">
     <span className="span" style={{color:'black'}}> Healthy Choices:</span>   Balanced options that are as good for you as they are tasty      
       </p>
       <p className="para1 mx-3 mt-3 fs-5">
     <span className="span" style={{color:'black'}}>  Creative Ideas:</span>  Get inspired with new twists on classic recipes.      
       </p>
      </div>

      <div className="row mt-5 ">
  <div className="col-md-3 mx-5 fs-4">
    <img 
      src={"/images/north.webp"}  className="img5 img-thumbnail float-start" alt="Western" 
      style={{ width: '400px', height: '300px' }} 
    />
    <p className="imgpara mt-4">Western</p>
  </div> 
  <div className="col-md-3 mx-5 fs-4">
    <img 
      src={"/images/southindian.jpeg"}  className="img6 img-thumbnail float-start" alt="South-Indian" 
      style={{ width: '400px', height: '300px' }} 
    />
    <p className="imgpara mt-5">South-Indian</p>
  </div> 
  <div className="col-md-3 mx-5 fs-4 ">
    <img 
      src={"/images/north.webp"}  className="img7 img-thumbnail float-start"  alt="North-Indian" 
      style={{ width: '400px', height: '300px' }} 
    />
    <p className="imgpara mt-5">North-Indian</p>
  </div> 
</div>

<hr style={{height:'3px', width:'900px',  backgroundColor: 'black',border: 'none', margin: '20px auto' }}/>
    
<div className="row mt-5 mx-4">
   <h4 style={{ color: 'red' }}>Get Started</h4>
   <p className="para1 mx-3 mt-3 fs-5">
       Ready to make every meal a masterpiece? Dive into our collection of recipes, tips, and inspiration, and turn your kitchen into a haven of flavor and fun.   </p>
  </div>

<div className="row">
  <h3 className="tasty">TastyTable</h3>
  <h5 className="join">Join our Community</h5>
</div>

<footer className="footer text-white p-3 mt-5" style={{ background: "linear-gradient(to right,#00093c,#2d0b00)", width: "100%", color: "white", borderTopLeftRadius: "125px" }}>


   <div class="container text-center">
     <div class="row justify-content-md-center text-warning">
      <div class="col col-lg-2">
      <i className="bi bi-instagram fs-3"></i>
     </div>
    <div class="col-md-auto">
    <i className="bi bi-facebook fs-3"></i>
    </div>
    <div class="col col-lg-2">
    <i className="bi bi-twitter fs-3"></i>
    </div>
    </div>
  </div> 


  <div  className=" mt-5 container text-center" >
  <div className="row">
    <ul style={{listStyleType:"none", display: "flex",gap:"40px",justifyContent:"center"}}>
    <li><a href="/" style={{ textDecoration: "none", color: "white" }}>Home</a></li>
  <li><a href="/about" style={{ textDecoration: "none", color: "white" }}>About Us</a></li>
  <li><a href="/menu" style={{ textDecoration: "none", color: "white" }}>Menu</a></li>
  <li><a href="/contact" style={{ textDecoration: "none", color: "white" }}>Contact Us</a></li>


    </ul>
        <hr style={{ width: "75%", margin: "10px auto", borderTop: "2px solid white" }} />
  </div>
  </div>



  

  </footer>




    <div className="container mt-4">
        <Outlet />
      </div>
      
    </div>
 </div>
  );
}
