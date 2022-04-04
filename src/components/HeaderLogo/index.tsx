import React from "react";

import { HeaderProps } from "./types";
import { Container, Logo, HeaderText } from "./styles";

import logo from "../../assets/WhiteLogo.svg";

const HeaderLogo: React.FC<HeaderProps> = ({ color }) => (
  <Container>
    <Logo src={logo} color={color} />
    <HeaderText color={color}>Books</HeaderText>
  </Container>
);

export default HeaderLogo;
