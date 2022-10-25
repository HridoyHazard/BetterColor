import styled from "styled-components";

export const NavWrapper = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 2rem;
  list-style: none;
  background-color: rgb(17, 24, 39);
  @media (max-width: 800px) {
    justify-content: center;
  }
`;

export const NavList = styled.li`
  display: flex;
  padding: 1rem;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    color: #efb22d;
  }
`;

