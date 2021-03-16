import React from "react";
import logo from "../assets/desktop/logo.svg";
import iconMoon from "../assets/desktop/icon-moon.svg";
import iconSun from "../assets/desktop/icon-sun.svg";

function Header({ setTheme }) {
  function handleTheme(event) {
    console.log(event.target.value);
    setTheme(event.target.value);
  }
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <img src={logo} />
          <div className="theme-toggle-container">
            <label htmlFor="light" className="toggle-label sun">
              <img src={iconSun} />
            </label>

            <input
              type="radio"
              name="theme"
              value="light"
              id="light"
              defaultChecked
              onChange={handleTheme}
            />
            <input
              type="radio"
              name="theme"
              value="dark"
              id="dark"
              onChange={handleTheme}
            />
            <div className="toggle-pill"></div>

            <label htmlFor="dark" className="toggle-label">
              <img src={iconMoon} />
            </label>

            <span className="theme-toggle"></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
