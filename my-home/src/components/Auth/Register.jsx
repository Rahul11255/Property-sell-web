import React, { useState } from "react";
import "./register.css";
import axios from "axios"
import { NavLink } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({});

  const inputHandel = (e) => {
    setFormData((prevalue)=>({...prevalue ,[e.target.name]:e.target.value}))
  };
  
  const sendFormData =()=>{
    if ( formData.name == null || formData.email == null || formData.number == null || formData.role == null || formData.password == null ) {
      alert("Please kindly fill this is all given input")
    } else {
      axios.post("http://127.0.0.1:5000/api/auth/register" , formData)
      .then((res)=>{

        setFormData({})
        alert("Data Submitted Successfully");
        }).catch((err)=>{
        console.log(err);
        }); 
        
    }
  }


  return (
    <div >
    <div className="register_container">
      <div className="register_images"></div>
      <div className="register_form">
        <div className="register_form_container">
          <div className="top_register">
            <h3 className="register_h3">Register/Signup</h3>
          </div>
          <div className="bottom_register">
            <div className="register_text_email">
              <input
                name="name"
                onChange={inputHandel}
                value={formData.name || ""}
                type="text"
                className="name_text"
                placeholder="Name..."
              />
              <input
                name="email"
                onChange={inputHandel}
                value={formData.email || ""}
                type="email"
                className="name_email"
                placeholder="E - Mail.."
              />
              <input
                name="number"
                onChange={inputHandel}
                value={formData.number || ""}
                type="text"
                className="name_number"
                placeholder="2236658915"
              />
               <input
                name="password"
                onChange={inputHandel}
                value={formData.password || ""}
                type="text"
                className="name_number"
                placeholder="Password..."
              />
            </div>
            <div className="register_radio_button">
              <label htmlFor="buyer">Buyer</label>
              <input
                onChange={inputHandel}
                value={"buyer"}
                id="buyer"
                type="radio"
                name="role"
                className="radio"
              />
              <label htmlFor="seller">Seller</label>
              <input
                onChange={inputHandel}
                value={"seller"}
                id="seller"
                type="radio"
                name="role"
                className="radio"
              />
            </div>
            <hr className="register_hr" />
            <div className="regsiter_btn">
              <li className="visit_li" typeof="submit"  onClick={sendFormData} >
                Register
              </li>
            </div>
            <div className='new_user_register'>
              <NavLink className={"nav-link"} to={"/auth"} >Login-Now</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;
