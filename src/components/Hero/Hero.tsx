import React from "react";
import { HeroContainer } from "./Hero.styled";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <h1 className="hero-h1">
          Helping companies build better, scable software.
        </h1>
        <p className="hero-p">
          Award-winning web developer and author, with over 15+ years of working
          experience with Fortune 500 companies like Apple, Google, Facebook,
          and more.
        </p>
      </HeroContainer>
    </>
  );
};

export default Hero;
