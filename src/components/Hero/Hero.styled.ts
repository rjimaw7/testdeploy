import styled from "styled-components";

export const HeroContainer = styled.section`
  margin-top: 0.5rem;
  padding: 1.5rem;

  .hero-h1 {
    font-size: 3.5rem;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    width: 50%;
  }

  .hero-p {
    color: #9b9b9b;
    margin-top: 1rem;
    width: 40%;
  }

  @media all and (max-width: 480px) {
    .hero-h1 {
      font-size: 1.9rem;
      width: 100%;
    }

    .hero-p {
      width: 100%;
    }
  }

  @media all and (min-width: 480px) and (max-width: 992px) {
    .hero-h1 {
      width: 100%;
    }

    .hero-p {
      width: 80%;
    }
  }
`;
