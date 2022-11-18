import styled from 'styled-components';

export const Container = styled.div`
  width: 352px;
  padding: 0 1.5rem;
  margin: 5rem auto 0;

  display: flex;
  flex-direction: column;
  text-align: center;

  .icon {
    background: rgba(0, 0, 0, .15);
    border-radius: 100%;
    width: 50px;
    margin: 0 auto;
    height: 50px;
    font-size: 1.25rem;
    color: #333;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 1.5rem;
    margin: 2rem 0 .25rem;
  }

  p {
    margin: .5rem 0 2rem;
    color: rgba(0, 0, 0, .85);
    line-height: 1.25;
    font-family: "Roboto", sans-serif;
  }

  button {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: #333;
    margin-top: 1.5rem;
    font-family: "Roboto", sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: color .25s;

    &:hover {
      color: ${props => props.theme['--orange-900']}
    }
    
    svg {
      margin-right: 1rem;
    }
  }
`;
