import React from "react";

import { Container, Icon } from "./styles";

import { LogOutButtonProps } from "./types";

const LogOutButton: React.FC<LogOutButtonProps> = ({ onClick }) => (
  <Container onClick={onClick}>
    <Icon />
  </Container>
);

export default LogOutButton;
