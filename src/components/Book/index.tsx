import React from "react";

import {
  Container,
  BookContent,
  BookImage,
  BookInfo,
  InfoHeader,
  BookTitle,
  BookAuthorsContainer,
  BookAuthor,
  InfoBody,
  Info,
} from "./styles";

import { BookType } from "./types";

const Book: React.FC<BookType> = ({
  onBookClick,
  id,
  title,
  description,
  authors,
  pageCount,
  category,
  imageUrl,
  isbn10,
  isbn13,
  language,
  publisher,
  published,
}) => (
  <Container
    onClick={() =>
      onBookClick?.({
        id,
        category,
        title,
        authors,
        pageCount,
        imageUrl,
        publisher,
        published,
        isbn10,
        isbn13,
        language,
        description,
      })
    }
  >
    <BookContent>
      <BookImage src={imageUrl} />
      <BookInfo>
        <InfoHeader>
          <BookTitle>{title}</BookTitle>
          <BookAuthorsContainer>
            {authors.map((author) => (
              <BookAuthor>{author}</BookAuthor>
            ))}
          </BookAuthorsContainer>
        </InfoHeader>
        <InfoBody>
          <Info>{`${pageCount} páginas`}</Info>
          <Info>{publisher}</Info>
          <Info>{published}</Info>
        </InfoBody>
      </BookInfo>
    </BookContent>
  </Container>
);

export default Book;
