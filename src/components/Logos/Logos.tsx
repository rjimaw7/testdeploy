import React from "react";
import { LogosContainer } from "./Logos.styled";
import Tinder from "../../Assets/Logos/Tinder";
import Walmart from "../../Assets/Logos/Walmart";
import Morgan from "../../Assets/Logos/Morgan";
import Visa from "../../Assets/Logos/Visa";
import Samsung from "../../Assets/Logos/Samsung";
import Verizon from "../../Assets/Logos/Verizon";

const Logos = () => {
  return (
    <LogosContainer>
      <div className="logo-images">
        <Walmart />
        <Morgan />
        <Visa />
        <Tinder />
        <Samsung />
        <Verizon />
      </div>
    </LogosContainer>
  );
};

export default Logos;
