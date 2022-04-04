import React, { useState, useRef, ChangeEvent, useEffect } from "react";

import { object, string, ValidationError } from "yup";
import { useNavigate } from "react-router-dom";

import { Container, FormContainer, Form, InputContainer } from "./styles";

import Input from "../../components/Input";
import LoginErrorBox from "../../components/LoginErrorBox";
import HeaderLogo from "../../components/HeaderLogo";

import * as api from "../../api";
import UserDTO from "../../api/dtos/UserDTO";

const loginSchema = object({
  email: string()
    .trim()
    .required("Por favor, preencha o campo de e-mail.")
    .email("Por favor, informe um endereço de e-mail válido."),
  password: string().trim().required("Por favor, preencha o campo de senha."),
});

const Login: React.FC = () => {
  const emailRef = useRef<string>("");
  const passwordRef = useRef<string>("");

  const navigate = useNavigate();

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState<UserDTO | null>(null);

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    emailRef.current = e.target.value;
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    passwordRef.current = e.target.value;
  };

  const onLoginError = (message: string) => {
    setErrorMessage(message);
    setShowError(true);
  };

  const onFormSubmit = async () => {
    setShowError(false);
    try {
      const data = { email: emailRef.current, password: passwordRef.current };
      await loginSchema.validate(data);

      const response = await api.login(data);

      delete response.headers["content-length"];
      delete response.headers["content-type"];

      setUserData({ ...response.data, ...response.headers });
    } catch (e: any) {
      let message = "Ocorreu um erro. Tente novamente.";
      if (e instanceof ValidationError) {
        message = e.message;
      } else if (e.response.status === 401) {
        message = "Usuário ou senha incorretos.";
      }

      onLoginError(message);
    }
  };

  useEffect(() => {
    if (userData) navigate("/home", { state: userData });
  }, [userData]);

  return (
    <Container>
      <FormContainer>
        <Form>
          <HeaderLogo color="white" />
          <InputContainer>
            <Input type="email" onChange={onEmailChange} />
            <Input type="password" onChange={onPasswordChange} onFormSubmit={onFormSubmit} />
          </InputContainer>
        </Form>
        {showError && <LoginErrorBox message={errorMessage} />}
      </FormContainer>
    </Container>
  );
};

export default Login;
