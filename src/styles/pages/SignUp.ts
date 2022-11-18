import styled from "styled-components";

export const Container = styled.div`
  width: 352px;
  padding: 0 1.5rem;
  margin: 5rem auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

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
    margin-top: 1.5rem;
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