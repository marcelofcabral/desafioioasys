import styled from "styled-components";

import firstBackground from "../../assets/bg1.svg";
import secondBackground from "../../assets/bg2.svg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${firstBackground}), url(${secondBackground});
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
`;

export const ContentContainer = styled.div`
  height: 640px;
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BooksContainer = styled.div`
  align-self: center;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 8px;
`;

export const WelcomeMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 210px;
`;

export const WelcomeMessage = styled.p`
  line-clamp: 1;
  margin-right: 15px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  min-width: 200px;

  padding: 0 8px;
`;

export const PagesText = styled.p``;

export const ChangePageButtonContainer = styled.div`
  width: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 25px;
`;
