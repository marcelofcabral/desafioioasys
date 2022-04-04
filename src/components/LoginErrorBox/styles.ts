import styled from "styled-components";

export const Container = styled.div`
  margin-top: 14px;
`;

export const TextContainer = styled.div`
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(255, 255, 255, 0.4);

  border-radius: 4px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;

export const Arrow = styled.div`
  width: 0;
  height: 0;

  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid rgba(255, 255, 255, 0.4);

  margin-left: 33px;
`;
