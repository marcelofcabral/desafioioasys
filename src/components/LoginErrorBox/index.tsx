import React from "react";

import { Container, TextContainer, Text, Arrow } from "./styles";

import { LoginErrorProps } from "./types";

const LoginErrorBox: React.FC<LoginErrorProps> = ({ message }) => (
  <Container>
    <Arrow />
    <TextContainer>
      <Text>{message}</Text>
    </TextContainer>
  </Container>
);

export default LoginErrorBox;
