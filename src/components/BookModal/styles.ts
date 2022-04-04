import styled from "styled-components";
import QuotesSvg from "../../assets/Quotes.svg";

export const CloseModalButton = styled.button`
  cursor: pointer;

  position: absolute;
  top: 16px;
  right: 17px;

  background-color: white;

  border: 1px solid rgba(51, 51, 51, 0.2);

  border-radius: 16px;

  height: 32px;
  width: 32px;
`;

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.4);

  height: 100vh;
  width: 100vw;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 769px;
  height: 608px;

  padding: 48px;

  border-radius: 4px;

  background-color: white;
`;

export const TextContainer = styled.div`
  height: 512px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 48px;
`;

export const TextHeader = styled.div``;

export const BookImage = styled.img`
  width: 349px;
  height: 512px;
`;

export const BookAuthors = styled.p`
  font-weight: 400;
  font-size: 12px;

  color: rgba(171, 38, 128, 1);
`;

export const BookTitle = styled.p`
  line-clamp: 2;
  font-weight: 500;
  font-size: 28px;

  text-overflow: ellipsis;
`;

export const InfoContainer = styled.div``;

export const InfoTitle = styled.p`
  font-weight: 500;
  font-size: 12px;

  text-transform: capitalize;

  margin-bottom: 10px;
`;

export const BookInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 12px;
`;

export const BookInfoKeysContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookInfoValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const BookInfoKey = styled.b`
  font-weight: 500;

  font-size: 12px;
`;

export const BookInfoValue = styled.p`
  font-weight: 400;
  font-size: 12px;

  color: rgba(153, 153, 153, 1);
`;

export const BookReviewContainer = styled.div``;

export const BookReviewTitle = styled.p`
  font-weight: 500;

  margin-bottom: 10px;
`;

export const Quotes = styled.img.attrs({
  src: QuotesSvg,
})`
  display: inline;

  color: rgba(51, 51, 51, 0.5);

  margin-right: 8px;
`;

export const BookReviewBody = styled.div``;

export const BookReviewText = styled.p`
  display: inline;

  font-weight: 400;
  font-size: 12px;

  color: rgba(153, 153, 153, 1);
`;
