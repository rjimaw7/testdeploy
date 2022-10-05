import React from "react";
import { SectionPhotoContainer } from "./SectionPhoto.styled";
import Spense from "../../Assets/Spense.png";
import Yelp from "../../Assets/YelpCamp.png";

const SectionPhoto = () => {
  return (
    <SectionPhotoContainer>
      <div className="spense">
        <img src={Spense} alt="spense" />
        <h2>
          Spense.com <span>&#8594;</span>
        </h2>
        <p>
          Rethinking the way writers get paid, an open source platform designed
          to help writers focus on more writing, and less on when and how
          they'll get paid. Project in collaboration with Codewell.cc
        </p>
      </div>

      <div className="yelp">
        <img src={Yelp} alt="yelp" />
        <h2>
          YelpCamp.com <span>&#8594;</span>
        </h2>
        <p>
          Allowing backpack travelers to perfectly plain their trip through an
          open-source platform similar to TripAdvisor. With over 1m MAU,
          YelpCamp has been the crowd's favorite in 2021
        </p>
      </div>
    </SectionPhotoContainer>
  );
};

export default SectionPhoto;
