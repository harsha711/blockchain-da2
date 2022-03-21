import { Language, NotificationsNone, Settings } from "@mui/icons-material";
import React, { useState } from "react";
import "./Navbar.css";
//import featuredGif2 from "../../featuredGifs/featuredGif2.gif";

export default function Navbar() {
  const featuredAvatar =
    "https://i0.wp.com/nevernoob.com/wp-content/uploads/2014/01/noob.jpg?fit=667%2C476&ssl=1&w=640";

  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="topLeft logo">Random Store's Wallet</div>
        <div className="topRight">
          <div className="iconsContainer">
            <div className="iconBadge">
              <NotificationsNone />
              <span className="notif">
                <span className="num">2</span>
              </span>
            </div>
            <div className="iconBadge">
              <Language />
            </div>
            <div className="iconBadge">
              <Settings />
            </div>
            <div>
              <img src={featuredAvatar} className="Avatar" alt="Avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
