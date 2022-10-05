import React from "react";
import { FooterContainer } from "./Footer.styled";
import Twitter from "../../Assets/Social Icons/Twitter.svg";
import LinkedIn from "../../Assets/Social Icons/LinkedIn.svg";
import Github from "../../Assets/Social Icons/Github.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <h2>Jonathan Specter</h2>
      <div className="social-links">
        <img src={Twitter} alt="twitter" />
        <img src={LinkedIn} alt="linkedin" />
        <img src={Github} alt="github" />
      </div>
    </FooterContainer>
  );
};

export default Footer;
