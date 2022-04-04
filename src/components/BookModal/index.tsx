import React from "react";

import {
  CloseModalButton,
  Overlay,
  ModalContent,
  BookImage,
  BookAuthors,
  BookTitle,
  InfoContainer,
  InfoTitle,
  BookInfoContainer,
  BookInfoKeysContainer,
  BookInfoKey,
  BookInfoValuesContainer,
  BookInfoValue,
  BookReviewContainer,
  BookReviewTitle,
  BookReviewBody,
  BookReviewText,
  TextContainer,
  TextHeader,
  Quotes,
} from "./styles";

import { BookModalProps } from "./types";

const BookModal: React.FC<BookModalProps> = ({
  data: { title, description, authors, pageCount, imageUrl, isbn10, isbn13, language, publisher, published },
  onClose,
}) => (
  <Overlay>
    <CloseModalButton onClick={onClose}>X</CloseModalButton>
    <ModalContent>
      <BookImage src={imageUrl} />
      <TextContainer>
        <TextHeader>
          <BookTitle>{title}</BookTitle>
          <BookAuthors>
            {authors.reduce(
              (acc: string, authorName: string, idx) =>
                idx < authors.length - 1 ? `${acc}${authorName}, ` : `${acc}${authorName}`,
              ""
            )}
          </BookAuthors>
        </TextHeader>
        <InfoContainer>
          <InfoTitle>INFORMAÇÕES</InfoTitle>
          <BookInfoContainer>
            <BookInfoKeysContainer>
              <BookInfoKey>Páginas</BookInfoKey>
              <BookInfoKey>Editora</BookInfoKey>
              <BookInfoKey>Publicação</BookInfoKey>
              <BookInfoKey>Idioma</BookInfoKey>
              <BookInfoKey>Título Original</BookInfoKey>
              <BookInfoKey>ISBN-1O</BookInfoKey>
              <BookInfoKey>ISBN-13</BookInfoKey>
            </BookInfoKeysContainer>
            <BookInfoValuesContainer>
              <BookInfoValue>{pageCount} páginas</BookInfoValue>
              <BookInfoValue>{publisher}</BookInfoValue>
              <BookInfoValue>{published}</BookInfoValue>
              <BookInfoValue>{language}</BookInfoValue>
              <BookInfoValue>{title}</BookInfoValue>
              <BookInfoValue>{isbn10}</BookInfoValue>
              <BookInfoValue>{isbn13}</BookInfoValue>
            </BookInfoValuesContainer>
          </BookInfoContainer>
        </InfoContainer>
        <BookReviewContainer>
          <BookReviewTitle>RESENHA DA EDITORA</BookReviewTitle>
          <BookReviewBody>
            <Quotes />
            <BookReviewText>{description}</BookReviewText>
          </BookReviewBody>
        </BookReviewContainer>
      </TextContainer>
    </ModalContent>
  </Overlay>
);

export default BookModal;
