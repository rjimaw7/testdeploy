import React from "react";
import { BlackSectionContainer } from "./BlackSection.styled";

const BlackSection = () => {
  return (
    <BlackSectionContainer>
      <div className="black-section">
        <h2>Interested in working with me?</h2>
        <p>
          I'm active on all social media platforms listed below, but you can
          also send me an email and i will get back to you within 24-48 hours.
        </p>

        <button className="black-section-btn">Get in Touch</button>
      </div>
    </BlackSectionContainer>
  );
};

export default BlackSection;
