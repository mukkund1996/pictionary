"use client";

import {IssueReopenedIcon, PinIcon} from "@primer/octicons-react";
import {HeaderContainer, MainNavButtons, StyledButton, StyledHeader, StyledLink} from "./Navbar.styles";

export const Navbar = () => {
  return (
    <HeaderContainer>
      <StyledHeader>
        <MainNavButtons>
          <StyledLink href="/">
            <StyledButton icon={IssueReopenedIcon} aria-label="Home" />
          </StyledLink>
          <StyledLink href="/saved">
            <StyledButton icon={PinIcon} aria-label="Saved" />
          </StyledLink>
        </MainNavButtons>
        <h1>Pictionary</h1>
      </StyledHeader>
    </HeaderContainer>
  );
};
