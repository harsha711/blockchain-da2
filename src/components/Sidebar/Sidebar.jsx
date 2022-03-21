import { AttachMoney, Inventory } from "@mui/icons-material";
import React from "react";
import "./Sidebar.css";

export default function Sidebar({ toggleVal, toggleSwitch }) {
  // destructuring the values of toggle buttons and highlighting the button that needs to be switched
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarTitle">
          <h3>Quick Menu</h3>
        </div>
        <ul className="sidebarList">
          <li
            className={`sidebarElement ${
              toggleVal ? "sidebarElement-active" : ""
            }`}
            onClick={() => toggleSwitch(true)}
          >
            <AttachMoney className="sidebarIcon" />
            <div className="sidebarElementValue">Transactions</div>
          </li>
          <li
            className={`sidebarElement ${
              !toggleVal ? "sidebarElement-active" : ""
            }`}
            onClick={() => toggleSwitch(false)}
          >
            <Inventory className="sidebarIcon" />
            <div className="sidebarElementValue">Products</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
