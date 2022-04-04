import React from "react";

import { Button as InternalButton } from "./styles";
import { ButtonProps } from "./types";

const LogInButton: React.FC<ButtonProps> = ({ onClick }) => <InternalButton onClick={onClick}>Entrar</InternalButton>;

export default LogInButton;
