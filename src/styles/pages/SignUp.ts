import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 368px;
  padding: 0 1rem;
  margin: 0 auto;

  .logo {
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    gap: .5rem;
    color: ${props => props.theme["--orange-900"]};
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
    
    svg {
      font-size: 2rem;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme["--orange-900"]};
    font-family: 'Inter', sans-serif;
    margin-top: 2rem;
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div + div {
    margin-top: 1rem;
  }

  button {
    margin-top: 1.25rem;
  }
`;