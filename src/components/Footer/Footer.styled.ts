import styled from "styled-components";

export const FooterContainer = styled.section`
  max-width: 1400px;
  margin: auto;
  overflow: hidden;

  padding: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: "Inter", sans-serif;
    font-weight: 300;
  }

  .social-links {
    cursor: pointer;
    display: flex;
    gap: 1rem;
  }

  @media all and (max-width: 480px) {
    padding: 1.5rem;
    justify-content: space-around;
    h2 {
      font-size: 1rem;
    }
  }
`;
