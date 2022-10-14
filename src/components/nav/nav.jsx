import React from "react";
import { NavWrapper, NavList, NavLink } from "./nav_style";

function Nav() {
  return (
    <nav>
      <NavWrapper>
        <NavList>
          <NavLink title="about" href="/">
            About
          </NavLink>
        </NavList>
        <NavList>
          <NavLink title="contact" href="/">
            Contact
          </NavLink>
        </NavList>
        <NavList>
          <NavLink title="contact" href="/">
            Support
          </NavLink>
        </NavList>
      </NavWrapper>
    </nav>
  );
}

export default Nav;
