import React, { useState } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const [formData, setformData] = useState({});
  const inputHandle = (e) => {
    setformData((prevalue) => ({
      ...prevalue,
      [e.target.name]: e.target.value,
    }));
  };
  const loginForm = () => {
    if (formData.email == null || formData.password == null) {
      alert("Please kindly fill this is all given input");
    } else {
      axios
        .post("http://127.0.0.1:5000/api/auth/login", formData)
        .then((res) => {
          // console.log(res.data.data);
          const { role, _id, name, email, number } = res.data.data;

          home();
          alert("Data Submitted Successfully");
          setformData({});

          localStorage.setItem("_id", _id);
          localStorage.setItem("email", email);
          localStorage.setItem("number", number);

          localStorage.setItem("role", role);
          localStorage.setItem("name", name);
          localStorage.setItem("loggedIn", true);
          console.log(`this is my name ${name}`);
          console.log(`this is my email ${email}`);
          console.log(`this is my number ${number}`);
          console.log(`this is my role ${role}`);
        });
    }
  };

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };
  return (
    <div className="login_cotainer">
      <div className="login_images"></div>
      <div className="login_form">
        <div className="register_form_container">
          <div className="top_register">
            <h3 className="login_h3">login</h3>
          </div>
          <div className="bottom_register">
            <div className="register_text_email">
              <input
                onChange={inputHandle}
                value={formData.email || ""}
                name="email"
                type="email"
                className="login_name_email"
                placeholder="E - Mail.."
              />
              <input
                onChange={inputHandle}
                value={formData.password || ""}
                name="password"
                type="password"
                className="login_name_password"
                placeholder="Password..."
              />
            </div>
            <div className="login_btn">
              <li className="visit_li" typeof="submit" onClick={loginForm}>
                Login
              </li>
            </div>
            <div className="new_user_register">
              new user{" "}
              <NavLink to={"/auth/register"} className={"nav-link"}>
                Register-Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
