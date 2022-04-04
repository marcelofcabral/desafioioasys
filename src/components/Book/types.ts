import BookDTO from "../../api/dtos/BookDTO";

export type BookType = {
  onBookClick?: (bookData: BookDTO) => void;
} & BookDTO;
