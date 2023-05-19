import React from "react";
import { UilUser } from "@iconscout/react-unicons";
import "../CSS/navbar.scss";

export default function NavBar() {
  return (
    <div className="NavMenu">
      <ul className="NavList">
        <li className="NavItem">Home</li>
        <div className="Separator" />
        <li className="NavItem">Piani</li>
        <div className="Separator" />
        <li className="NavItem">Chi Siamo</li>
      </ul>

      <div className="Login">
        <UilUser />
        <p>Login</p>
      </div>
    </div>
  );
}
