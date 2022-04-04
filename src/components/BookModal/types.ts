import BookDTO from "../../api/dtos/BookDTO";

export type BookModalProps = {
  data: BookDTO;
  onClose: () => void;
};
