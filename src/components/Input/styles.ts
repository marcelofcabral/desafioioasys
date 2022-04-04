import styled from "styled-components";

import { InputProps } from "./types";

export const Container = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-radius: 4px;

  background-color: rgba(0, 0, 0, 0.32);

  padding: 8px 16px;
`;

export const TextContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Input = styled.input<InputProps>`
  border: none;

  height: 15px;
  width: 100%;

  font-weight: 400;
  font-size: 16px;

  background: none;

  color: #fff;
`;

export const Label = styled.p`
  font-weight: 400;
  font-size: 12px;

  color: #fff;

  opacity: 0.5;
`;
