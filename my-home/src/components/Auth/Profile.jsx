import React from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Profile = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const role = localStorage.role;
  console.log(role);

  return (
    <div className="profile_container_top">
      <div className="navbar_register_container">
        <Navbar />
      </div>
      <div className="profile_container">
        <div className="profile_Data">
          <AccountCircleIcon
            sx={{ fontSize: 135 }}
            color="primary"
            className="profile_icon"
          />
          <p className="user_details" style={{ textTransform: "uppercase" }}>
            
            Name:{localStorage.name}
          </p>
          <p className="user_details">EMAIL:{localStorage.email}</p>
          <p className="user_details" style={{ textTransform: "uppercase" }}>
            
            Role:{localStorage.role}  
          </p>
          <p className="user_details" style={{ textTransform: "uppercase" }}>
            
            Number:{localStorage.number}
          </p>
        </div>
        <div className="profile_img">
          <div className="logout_btn" onClick={logout}>
            
            <p className="logout_btn_p"> log-out </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
