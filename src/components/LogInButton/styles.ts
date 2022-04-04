import styled from "styled-components";

import { ButtonProps } from "./types";

export const Button = styled.button<ButtonProps>`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 85px;
  height: 36px;

  border-radius: 44px;

  background-color: white;

  border: none;

  color: rgba(178, 46, 111, 1);

  font-weight: 500;
  font-size: 16px;

  padding: 8px 20px;

  transition: all 0.2s ease-in;

  &:hover {
    background-color: rgba(178, 46, 111, 1);
    color: white;
  }
`;

export const Aaaa = styled.button``;
