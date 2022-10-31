import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 .85rem;
  background: ${props => props.theme["--gray-300"]};
  color: ${props => props.theme['--gray-900']};
  height: 3rem;
  border-radius: 4px;
  border: 2px solid transparent;

  display: flex;
  align-items: center;
  gap: .85rem;

  transition: all .25s;

  &:focus-within {
    border-color: ${props => props.theme['--orange-900']};
    background: transparent;

    svg {
      color: ${props => props.theme['--orange-900']};
    }
  }
  
  input {
    width: 100%;
    background: transparent;
    border: 0;
    outline: 0;
    
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;
