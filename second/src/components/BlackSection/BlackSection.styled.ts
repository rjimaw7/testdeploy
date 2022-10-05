import styled from "styled-components";

export const BlackSectionContainer = styled.section`
  padding: 1rem;
  display: flex;

  h2 {
    font-size: 2.2rem;
    margin-top: 3rem;
    margin-bottom: 0.75rem;
    font-family: "Inter", sans-serif;
    font-weight: 300;
  }

  p {
    width: 50%;
    color: #9b9b9b;
  }

  .black-section-btn {
    cursor: pointer;
    background-color: #fbe850;
    color: black;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    margin-top: 0.75rem;
    margin-bottom: 3rem;
  }

  @media all and (max-width: 480px) {
    padding: 0;

    h2,
    p {
      width: 100%;
    }
  }

  @media all and (min-width: 480px) and (max-width: 992px) {
    padding: 0;

    h2 {
      width: 100%;
    }

    p {
      width: 60%;
    }
  }
`;
