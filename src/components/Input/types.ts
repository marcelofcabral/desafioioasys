import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: "email" | "password";
  onFormSubmit?: () => void;
}
