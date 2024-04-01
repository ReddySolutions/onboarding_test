import React from "react";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import avatar9 from "../assets/images/avatar9.png";
import "./../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <NotificationsRoundedIcon
        sx={{ color: "#fff", width: "30px", height: "30px" }}
      />
      <div className="profile">
        <img src={avatar9} alt="profile" />
        <span>
          Brooklyn Williamson <br /> 
          <span style={{ color: "#7b7f84" }}>@bwill007</span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
