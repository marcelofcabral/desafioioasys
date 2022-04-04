import styled from "styled-components";

import backgroundImage from "../../assets/bg_img.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 115px;

  width: 100vw;
  height: 100vh;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 598px) {
    padding: 0;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  height: 294px;
`;

export const Form = styled.div`
  height: 224px;
  width: 368px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputContainer = styled.div`
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
