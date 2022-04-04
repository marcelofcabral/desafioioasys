import axios from "axios";

import UserDTO from "./dtos/UserDTO";
import BooksPageDTO from "./dtos/BooksPageDTO";

import { LoginCredentials } from "./types";

const api = axios.create({
  baseURL: "https://books.ioasys.com.br/api/v1",
});

export const login = (credentials: LoginCredentials) => api.post<UserDTO>("/auth/sign-in", credentials);

export const getBooks = (page: number, authToken: string, refreshToken: string) =>
  api.get<BooksPageDTO>("/books", {
    params: { page, amount: 12 },
    headers: { Authorization: `Bearer ${authToken}`, "refresh-token": `Bearer ${refreshToken}` },
  });
