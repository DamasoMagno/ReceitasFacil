import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 368px;
  padding: 0 1rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .logo {
    display: flex;
    font-family: 'Roboto', sans-serif;
    align-items: center;
    gap: .5rem;
    color: ${props => props.theme["--orange-900"]};
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    
    svg {
      font-size: 2rem;
    }
  }

  .signUp {
    display: flex;
    align-items: center;
    gap: .25rem;
    font-size: 1.15rem;
    text-decoration: none;
    color: ${props => props.theme["--orange-900"]};
    font-family: "Roboto", sans-serif;
    margin: 1.25rem 0 8rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div:first-child {
    margin-bottom: 1rem;
  }

  a {
    align-self: flex-end;
    text-decoration: none;
    color: ${props => props.theme["--orange-900"]};
    margin: .85rem 0 1.25rem;
    font-family: 'Inter', sans-serif;
  }
`;