import React from "react";
import { GraySectionContainer } from "./GraySection.styled";

const GraySection = () => {
  return (
    <GraySectionContainer>
      <div className="first-gray">
        <h1>A co-founder at one of the world's largest communities</h1>
        <p>
          The combined experience I have working at the top Fortune 500
          companies has allowed me to develop a skillset that helps me in not
          just development, but in every aspect of any business.
        </p>
        <p>
          I'm proud to announce that I am now working at one of the world's
          largest communities teaching young minds about how to sell yourself as
          a developer and open them to a whole new world of opportunities
        </p>
      </div>

      <div className="second-gray">
        <p className="first-p">
          As a developer, you have everything available to you and all that's
          holding you back is yourself
        </p>

        <p>A quote I live by perfectly illustrates what I mean.</p>

        <p className="qoute">
          "How big would you dream, if you knew you wouldn't fail?" You've
          already gone through the hardest parts being a developer, it's time to
          elevate your skills and become a leader in something you're passionate
          about.
        </p>

        <p>
          Im happy to chat over coffee some time about how I can help your
          company.
        </p>
      </div>
    </GraySectionContainer>
  );
};

export default GraySection;
