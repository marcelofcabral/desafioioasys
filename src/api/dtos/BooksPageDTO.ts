import BookDTO from "./BookDTO";

type BooksPageDTO = {
  data: BookDTO[];
  page: number;
  totalPages: number;
  totalItems: number;
};

export default BooksPageDTO;
