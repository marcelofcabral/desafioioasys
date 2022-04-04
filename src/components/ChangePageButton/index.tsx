import React from "react";

import { Container, Icon } from "./styles";
import { ChangePageButtonProps } from "./types";
import chevron from "../../assets/Chevron.svg";

const ChangePageButton: React.FC<ChangePageButtonProps> = ({ direction, onClick }) => (
  <Container onClick={onClick}>
    <Icon src={chevron} direction={direction} />
  </Container>
);

export default ChangePageButton;
