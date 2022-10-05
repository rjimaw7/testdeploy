import styled from "styled-components";

export const SectionPhotoContainer = styled.section`
  padding: 1.5rem;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  line-height: 1.3;

  p {
    color: #9b9b9b;
  }

  .spense {
    img {
      width: 93%;
    }

    h2 {
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
      font-family: "Inter", sans-serif;
      font-weight: 300;
    }

    p {
      width: 70%;
    }
  }

  .yelp {
    img {
      width: 100%;
    }

    h2 {
      margin-top: 0.75rem;
      margin-bottom: 0.75rem;
      font-family: "Inter", sans-serif;
      font-weight: 300;
    }

    p {
      width: 70%;
    }
  }

  @media all and (max-width: 480px) {
    display: block;

    img {
      width: 100% !important;
    }

    p {
      width: 100% !important;
    }

    .spense {
      p {
        margin-bottom: 2.5rem;
      }
    }

    .yelp {
      p {
        margin-bottom: 2.5rem;
      }
    }
  }

  @media all and (min-width: 480px) and (max-width: 992px) {
    display: block;

    img {
      width: 100% !important;
    }

    p {
      width: 100% !important;
    }

    .spense {
      p {
        margin-bottom: 2.5rem;
      }
    }

    .yelp {
      p {
        margin-bottom: 2.5rem;
      }
    }
  }
`;
