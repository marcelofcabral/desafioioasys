import React, { useState, useRef, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import { SpinnerCircular } from "spinners-react";

import { UserData } from "./types";
import { BookType } from "../../components/Book/types";
import BookDTO from "../../api/dtos/BookDTO";

import {
  Container,
  ContentContainer,
  BooksContainer,
  Header,
  WelcomeMessageContainer,
  WelcomeMessage,
  Footer,
  PagesText,
  ChangePageButtonContainer,
} from "./styles";

import * as api from "../../api";

import LogOutButton from "../../components/LogOutButton";
import ChangePageButton from "../../components/ChangePageButton";
import HeaderLogo from "../../components/HeaderLogo";
import Book from "../../components/Book";
import BookModal from "../../components/BookModal";

const Home: React.FC = () => {
  const userData: UserData = useLocation().state as UserData;
  const navigate = useNavigate();

  const userDataRef = useRef<UserData>(userData);

  const lastPageFetchedRef = useRef(2);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [books, setBooks] = useState<BookType[]>([]);
  const [modalData, setModalData] = useState<BookDTO | null>(null);
  const [loading, setLoading] = useState(true);

  const firstBookOfPage = (currentPage - 1) * 12;
  const lastBookOfPage = firstBookOfPage + 11;

  const onPageBack = () => {
    if (currentPage > 1) setCurrentPage((prevPageNum) => --prevPageNum);
  };

  const onPageForward = () => {
    if (currentPage < totalPages) setCurrentPage((prevPageNum) => ++prevPageNum);
  };

  const onLogOut = () => {
    navigate("/");
  };

  const onBookClick = (bookData: BookDTO) => {
    setModalData(bookData);
  };

  useEffect(() => {
    const getBooksFromNextPage = async () => {
      if (currentPage >= lastPageFetchedRef.current) {
        setLoading(true);

        const { authorization } = userDataRef.current;
        const refreshToken = userDataRef.current["refresh-token"];

        const response = await api.getBooks(currentPage + 1, authorization, refreshToken);

        const nextPageBooks = response.data.data;
        const latestTotalPages = Math.floor(response.data.totalPages);

        setBooks([...books, ...nextPageBooks]);
        setTotalPages(latestTotalPages);

        lastPageFetchedRef.current = currentPage + 1;

        setLoading(false);
      }
    };

    getBooksFromNextPage();
  }, [currentPage]);

  useEffect(() => {
    const getFirstTwoBooksPages = async () => {
      const { authorization } = userDataRef.current;
      const refreshToken = userDataRef.current["refresh-token"];

      const [firstPageResponse, secondPageResponse] = await Promise.all([
        api.getBooks(1, authorization, refreshToken),
        api.getBooks(2, authorization, refreshToken),
      ]);

      const firstPageBooks = firstPageResponse.data.data;
      const secondPageBooks = secondPageResponse.data.data;
      const latestTotalPages = Math.floor(secondPageResponse.data.totalPages);

      setBooks([...firstPageBooks, ...secondPageBooks]);
      setTotalPages(latestTotalPages);
      setLoading(false);
    };

    getFirstTwoBooksPages();
  }, []);

  return (
    <Container>
      {modalData && <BookModal onClose={() => setModalData(null)} data={modalData} />}
      <ContentContainer>
        <Header>
          <HeaderLogo color="black" />
          <WelcomeMessageContainer>
            <WelcomeMessage>
              {userData.gender === "H" ? "Bem-vindo, " : "Bem-vinda, "}
              <b>{userData.name}</b>
            </WelcomeMessage>
            <LogOutButton onClick={onLogOut} />
          </WelcomeMessageContainer>
        </Header>
        {loading ? (
          <SpinnerCircular style={{ alignSelf: "center" }} enabled={loading} />
        ) : (
          <BooksContainer>
            {books.slice(firstBookOfPage, lastBookOfPage + 1).map((bookData) => (
              <Book onBookClick={onBookClick} key={bookData.id} {...bookData} />
            ))}
          </BooksContainer>
        )}
        <Footer>
          <PagesText>
            Página <b>{currentPage}</b> de <b>{totalPages || "--"}</b>
          </PagesText>
          <ChangePageButtonContainer>
            <ChangePageButton direction="left" onClick={onPageBack} />
            <ChangePageButton direction="right" onClick={onPageForward} />
          </ChangePageButtonContainer>
        </Footer>
      </ContentContainer>
    </Container>
  );
};

export default Home;
