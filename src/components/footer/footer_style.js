import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  height: inherit;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgb(17, 24, 39);
  margin-top: 7rem;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
  padding: 1rem;

  @media (max-width: 811px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    padding: 0 1rem;
    font-size: 1.5rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 403px) {
    display: block;
  }
`;

export const FooterSocialIcon = styled.div`
  align-items: center;
  display: flex;

  a {
    font-size: 30px;
    margin: 0 0.5rem;
    width: 20px;
    height: 20px;
    align-items: center;
  }

  @media (max-width: 403px) {
    justify-content: center;
    margin: 1rem auto;
  }
`;
