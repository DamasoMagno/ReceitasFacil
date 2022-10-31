import { ButtonHTMLAttributes, FC } from "react";

import { Container, ButtonVariants } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
}

export const Button: FC<ButtonProps> = ({
  variant = "default",
  children,
  ...props
}) => {
  return (
    <Container variant={variant} {...props}>
      {children}
    </Container>
  );
};
