import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  padding-left: 16px;

  border-radius: 4px;

  background-color: white;

  width: 272px;
  height: 160px;

  box-shadow: 0 3px 8px 1px #e8e8e8;
`;

export const BookContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  height: 123px;
`;

export const BookImage = styled.img`
  height: 100%;

  box-shadow: 0 4px 6px 0 #c9c9c9;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  margin-left: 16px;
`;
export const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const BookTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const BookAuthorsContainer = styled.div``;

export const BookAuthor = styled.p`
  font-size: 12px;

  color: rgba(171, 38, 128, 1);
`;

export const InfoBody = styled.div`
  display: flex;
  flex-direction: column;
  //flex-direction: column;
  //justify-content: space-between;

  height: 58px;
`;

export const Info = styled.p`
  font-size: 12px;

  color: rgba(153, 153, 153, 1);
`;
