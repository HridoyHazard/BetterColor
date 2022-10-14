import styled from "styled-components";

export const MainWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 10px;
  width: 800px;
  margin: 1rem auto;
  text-align: center;

  @media (max-width: 831px) {
    width: 100%;
  } ;
`;

export const MainContent = styled.div`
  padding: 3rem;
  border-radius: 1rem;
  line-height: 1.5rem;

  h2,
  p {
    padding: 1rem;
  }
`;

export const MainSubContent = styled.div`
  padding: 3rem;
  background-color: #fdfae0;
  border-radius: 1rem;

  p {
    color: black;
    font-size: 1rem;
  }
`;

export const MainButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
