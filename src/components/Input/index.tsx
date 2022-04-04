import React from "react";

import LogInButton from "../LogInButton";

import { InputProps } from "./types";
import { Container, Input as InternalInput, Label, TextContainer } from "./styles";

const Input: React.FC<InputProps> = ({ type, onFormSubmit, ...rest }) => (
  <Container>
    <TextContainer>
      <Label>{type === "email" ? "Email" : "Senha"}</Label>
      <InternalInput type={type} {...rest} />
    </TextContainer>
    {type === "password" && <LogInButton onClick={onFormSubmit} />}
  </Container>
);

export default Input;
