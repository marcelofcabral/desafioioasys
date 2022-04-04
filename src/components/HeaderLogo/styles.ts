import styled, { css } from "styled-components";

import { LogoProps, HeaderTextProps } from "./types";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img<LogoProps>`
  display: inline-block;

  ${({ color }) =>
    color === "black" &&
    css`
      filter: invert(100%);
    `}
`;

export const HeaderText = styled.p<HeaderTextProps>`
  display: inline-block;

  font-size: 28px;
  font-weight: 300;

  color: ${({ color }) => color};

  margin-left: 16px;
`;
