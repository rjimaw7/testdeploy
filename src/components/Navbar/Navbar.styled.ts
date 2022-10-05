import styled from "styled-components";

export const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  h1 {
    font-size: 1.25rem;
    cursor: pointer;
  }

  .nav-items {
    display: flex;
    gap: 2.5rem;
    cursor: pointer;
    color: #9b9b9b;
  }

  .nav-btn {
    cursor: pointer;
    background-color: #fbe850;
    color: black;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  .nav-burger {
    cursor: pointer;
    display: none;

    z-index: 999;
  }

  @media all and (max-width: 480px) {
    justify-content: space-between;

    .nav-items,
    .nav-btn {
      display: none;
    }

    .nav-burger {
      display: block;
    }
  }

  @media all and (min-width: 480px) and (max-width: 992px) {
    .nav-items,
    .nav-btn {
      display: none;
    }

    .nav-burger {
      display: block;
    }
  }
`;
