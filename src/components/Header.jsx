import React from "react";
import BurgerMenu from "./Burger";

function Header({ name }) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <h4 className="navbar-brand">{name}</h4>
          <div className="navbar-toggle">
            <BurgerMenu />
          </div>
        </div>
        <div className="links-container"></div>
      </div>
    </nav>
  );
}

export default Header;
