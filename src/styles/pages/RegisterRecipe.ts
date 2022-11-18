import styled from 'styled-components';
import { darken } from "polished";

export const Recipe = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  gap: 8rem;
  padding: 0 1rem;
  max-width: 1129px;
  margin: 2rem auto 2rem;

  @media(max-width: 1024px){
    padding: 0 2rem;
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  section {
    h4 {
      color: rgba(0, 0, 0, .85);
      font-family: "Roboto", sans-serif;
      margin-bottom: 1rem;
    }

    button {
      margin-top: 2rem;
      max-width: 350px;
      width: 100%;
    }
    
    div:has(.input):not(:last-of-type) {
      margin-bottom: .9rem;
    }
  }
`;

export const CoverImage = styled.div`
  background: rgba(255, 77, 0, 0.06);
  border: 3px dashed ${props => props.theme['--orange-900']};
  border-radius: 8px;
  position: relative;
  height: 14rem;
  margin-bottom: 1.5rem;

  transition: background .25s;

  &:hover {
    background: ${darken(.25, "rgba(255, 77, 0, 0.06)")};
  }

  * {
    cursor: pointer;
  }

  input {
    background-color: red;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  label {
    position: absolute;
    width: 50px;
    height: 50px;
    border: 2px dashed ${props => props.theme['--orange-900']};
    top: 50%;
    transform: translate(50%, -50%);
    right: 50%;
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    justify-content: center;
    border-radius: 50%;
    color: ${props => props.theme['--orange-900']};
    background: rgba(255, 77, 0, 0.06);
  }
`;

export const Ingredients = styled.div`
  margin-top: 1.625rem;

  strong {
    color: rgba(0, 0, 0, .5);
    font-family: "Roboto", sans-serif;
    display: block;
    margin: 0rem 0 1rem;
  }

  .ingredient {
    margin-bottom: .85rem;
    display: grid;
    gap: .4rem;

    @media(min-width: 450px){
      grid-template-columns: 1fr .85fr;
    }
  }

  .measurements {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: .25rem;
  }
`;