import styled, { css } from "styled-components";

export const Container = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  border-radius: 16px;

  background-color: transparent;

  border: 1px solid rgba(51, 51, 51, 0.2);
`;

export const Icon = styled.img<{ direction: "left" | "right" }>`
  ${({ direction }) =>
    direction === "left" &&
    css`
      transform-origin: 50% 50%;
      transform: rotateY(180deg);
    `}
`;
