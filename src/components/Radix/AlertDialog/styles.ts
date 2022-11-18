import styled from 'styled-components';
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const Overlay = styled(AlertDialog.Overlay)`
  background-color: rgba(0, 0, 0, .25);
  position: fixed;
  inset: 0;
`;

export const Content = styled(AlertDialog.Content)`
  background-color: white;
  border-radius: 8px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px;
  width: 90%;
  max-width: 500px;
  padding: 1.5rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled(AlertDialog.Title)`
  color: ${props => props.theme['--black']};
  font-size: 1.25rem;
  font-weight: 500;
`;

export const Description = styled(AlertDialog.Description)`
  margin: .5rem 0 1.25rem;
  color: ${props => props.theme['--gray-900']};
  font-size: 1rem;
  line-height: 1.5;
`;

export  const Footer = styled.footer`
  max-width: 250px;
  width: 80%;
  margin-left: auto;
  
  display: flex;
  gap: .5rem;
`;