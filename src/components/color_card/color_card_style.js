import styled from "styled-components";

export const ColorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 1rem auto;

  @media (max-width: 679px) {
    display: block;
  } ;
`;

export const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: min-content;
  background-color: #1f2937;
  border-radius: 10px;
  margin: auto;
  padding: 10px;
  margin: 10px;
`;

export const ColorPickerContent = styled.div`
  height: inherit;
  width: 300px;
  padding: 2rem;
  background-color: #1f2937;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  h3,
  p {
    margin: 1.5rem auto;
  }
`;
