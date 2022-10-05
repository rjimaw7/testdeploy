import React from "react";
import { NavbarContainer } from "./Navbar.styled";
import Hamburger from "../../Assets/Hamburger Menu.svg";

const Navbar = () => {
  const toggleClick = (e: React.MouseEvent<HTMLElement>) => {
    const item = e.currentTarget.parentElement?.nextElementSibling;

    if (item?.classList.contains("d-none")) {
      item.classList.remove("d-none");
    } else {
      item?.classList.add("d-none");
    }
  };

  return (
    <>
      <NavbarContainer>
        <h1 className="logo">Jonathan Specter</h1>

        <ul className="nav-items">
          <li>Articles</li>
          <li>Chats</li>
          <li>Awards</li>
          <li>About</li>
        </ul>

        <button className="nav-btn">Get in Touch</button>

        <img
          src={Hamburger}
          onClick={toggleClick}
          className="nav-burger"
          alt="hamburger"
        />
      </NavbarContainer>

      <div className="dropdown-ul d-none">
        <ul className="dropdown-items">
          <li className="dropdown-li">Articles</li>
          <li className="dropdown-li">Chats</li>
          <li className="dropdown-li">Awards</li>
          <li className="dropdown-li">About</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
