import styled from "styled-components";

export const LogosContainer = styled.section`
  padding: 1.5rem;

  .logo-images {
    display: flex;
    justify-content: space-between;
  }

  @media all and (max-width: 480px) {
    .logo-images {
      display: grid;
      justify-content: space-around;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 1.5rem;
    }
  }

  @media all and (min-width: 480px) and (max-width: 992px) {
    .logo-images {
      display: grid;
      align-items: center;
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 1.5rem;
    }
  }
`;
