import { FC, InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ children, ...props }) => {
  return (
    <Container>
      {children}
      <input type="text" {...props} />
    </Container>
  );
};
