import styled, { css } from 'styled-components';

export type ButtonVariants = "default" | "ghost";

interface ButtonProps {
  variant: ButtonVariants;
}

export const Container = styled.button<ButtonProps>`
  width: 100%;
  height: 3rem;
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid transparent;
  cursor: pointer;
  background: ${props => props.theme['--red-700']};
  color: ${props => props.theme["--white"]};

  display: flex;
  align-items: center;
  gap: .5rem;
  justify-content: center;

  transition: .25s filter;

  ${props =>
    props.variant === "ghost" &&
    css`
      background: transparent;
      color: ${props => props.theme['--red-700']};;
      border-color: ${props => props.theme['--red-700']};
    `
  }

    &:hover {
      filter: brightness(.95);
  }
`;
