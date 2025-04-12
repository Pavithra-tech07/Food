import React,{useState} from 'react'
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported
import './Menu.css';
import ChatMenu from './ChatMenu';




export default function Menu() {

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
            <nav className="navbar navbar-expand-lg bg-warning position-fixed w-100 z-3   ">
              <div className="container-fluid">
                <img
                  src="/images/logo.png"
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


 <div className="row">
  <div className="col" >
    <ChatMenu/>   
  </div>
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
    <li><a href="/home" style={{ textDecoration: "none", color: "white" }}>Home</a></li>
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






