import React, { useState, useEffect, useRef } from "react";
import BurgerMenu from "./Burger";

const Header = ({ name, navLinks }) => {
  const [toggle, setToggle] = useState(false);
  const containerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const height = linksRef.current.getBoundingClientRect().height;
    if (toggle) {
      containerRef.current.style.height = `${height}px`;
    } else {
      containerRef.current.style.height = "0px";
    }
  }, [toggle]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <h4 className="navbar-brand">{name}</h4>
          {/* use button here instead */}
          <button className="nav-toggle" onClick={() => setToggle(!toggle)}>
            <BurgerMenu toggle={toggle} />
          </button>
        </div>
        <div className="links-container" ref={containerRef}>
          <ul className="navbar-nav" ref={linksRef}>
            {navLinks.map((link) => {
              const { id, url, title } = link;
              return (
                <li key={id}>
                  <a href={url}>{title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
