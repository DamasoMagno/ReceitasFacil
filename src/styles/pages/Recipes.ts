import styled from "styled-components";

export const Content = styled.main`
  max-width: 1129px;
  margin: 2rem auto 0;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 5rem;

  @media(max-width: 500px){
    grid-template-columns: 1fr;
  }
`;

export const Filters = styled.aside`
  display: flex;
  flex-direction: column;
  gap: .75rem;

  .ingredients {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      color: #8E8E8E;
      font-size: 1rem;
    }

    ul {
      margin-top: 1rem;

      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: .5rem;

      @media(max-width: 728px){
        gap: .25rem;
        justify-content: center;
      }

      button {
        border-radius: 1.5rem;
        background: transparent;
        border: 1px solid ${props => props.theme["--orange-900"]};
        color: ${props => props.theme["--orange-900"]};  
        padding: .5rem 1rem;
        cursor: pointer;
        font-size: 1rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .85rem;

        transition: transform .25s;

        &:hover {
          transform: scale(101.99%);
        }
      }
    }    
  }
`;

export const RecipeList = styled.section``;