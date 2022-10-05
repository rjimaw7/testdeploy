import styled from "styled-components";

export const GraySectionContainer = styled.section`
  max-width: 1400px;
  margin: auto;
  padding: 2.5rem;
  overflow: hidden;

  display: flex;

  .first-gray {
    transform: translateX(0.5rem);

    h1 {
      font-size: 2rem;
      font-family: "Inter", sans-serif;
      font-weight: 300;
      width: 70%;
    }

    p {
      width: 80%;
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
      color: #ababab;
    }
  }

  .second-gray {
    p {
      width: 75%;
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
      transform: translateX(3rem);
      color: #ababab;
    }
  }

  @media all and (max-width: 480px) {
    justify-content: center;
    flex-direction: column;

    .first-gray {
      transform: translateX();

      h1 {
        font-size: 1.75rem;
        width: 100%;
      }

      p {
        width: 100%;
      }
    }

    .second-gray {
      .first-p {
        margin-top: 2rem;
      }

      p {
        width: 100%;
        transform: translateX(0.25rem);
        margin-top: 1.75rem;
        margin-bottom: 1.75rem;
      }
    }
  }

  @media all and (min-width: 480px) and (max-width: 992px) {
    justify-content: center;
    flex-direction: column;

    .first-gray {
      h1,
      p {
        width: 100% !important;
      }

      p:first-of-type {
        margin-bottom: 1.5rem;
      }
    }

    .second-gray {
      h1,
      p {
        width: 100% !important;
      }

      p {
        width: 80%;
        transform: translateX(0.25rem);
      }
    }
  }
`;
