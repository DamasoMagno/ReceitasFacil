import styled, { css } from "styled-components";

export const Container = styled.header`
  background-color: ${props => props.theme['--white']};
`;

export const Content = styled.div`
  padding: 1rem 1rem;
  margin: 0 auto;
  max-width: 1129px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .logo {
    text-decoration: none;
    font-size: 1.5rem;
    color: ${props => props.theme['--orange-900']};

    display: flex;
    align-items: center;
    gap: .25rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .pages {
      display: flex;
      gap: 1rem;

      a {
        text-decoration: none;
        color: #000;
        font-size: 1rem;
        cursor: pointer;

        &:hover {
          color: ${props => props.theme['--orange-900']}
        }
      }
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 1rem;

      button {
        background-color: transparent;
        border: 0;
        font-size: 1.5rem;
        color: ${props => props.theme["--black"]};

        display: flex;
        align-items: center;
        justify-content: center;

        @media(min-width: 728px){
          display: none;
        }
      }
    }
  }
`;