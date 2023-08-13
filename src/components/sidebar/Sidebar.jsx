import React, { useState } from 'react';
import "./sidebar.css";
import Logo from "../../Assets/logo.svg";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
    <aside className={toggle ? "aside show-menu" : "aside"}>
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <div className="icon-user-following"></div>
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <div className="icon-briefcase"></div>
              </a>
            </li>

            <li className="nav__item">
              <a href="#resume" className="nav__link">
                <div className="icon-graduation"></div>
              </a>
            </li>

            <li className="nav__item">
              <a href="#work" className="nav__link">
                <div className="icon-layers"></div>
              </a>
            </li>

            {/* <li className="nav__item">
              <a href="#blog" className="nav__link">
                <div className="icon-note"></div>
              </a>
            </li> */}

            <li className="nav__item">
              <a href="contact" className="nav__link">
                <div className="icon-bubble"></div>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2021 - 2023</span>
      </div>
    </aside>

    <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
      <i className="icon-menu"></i>
    </div>
    </>

  );
};

export default Sidebar;