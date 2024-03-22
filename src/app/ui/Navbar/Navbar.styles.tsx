import {Header, IconButton} from "@primer/react";
import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
`;

export const StyledHeader = styled(Header)`
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MainNavButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 10px;
`;

export const StyledButton = styled(IconButton)`
  border-radius: 50%;
  border: none;
  :hover {
    background-color: #507dbc;
    svg {
      color: #fff;
    }
  }
`;
