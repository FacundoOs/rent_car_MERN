import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
  w-full
  max-w-2xl
  flex-row
  items-center
  lg:pl-12
  lg:pr-12
  justify-between
`}
`;

const LoogoContainer = styled.div``;

export function Navbar() {
  return (
    <NavbarContainer>
      <LoogoContainer>
        <Logo />
      </LoogoContainer>
    </NavbarContainer>
  );
}
