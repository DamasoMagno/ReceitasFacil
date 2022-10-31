import styled from "styled-components";
import * as Avatar from "@radix-ui/react-avatar";

export const AvatarContainer = styled(Avatar.Root)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;
  overflow: hidden;
  user-select: none;
  background-color: ${(props) => props.theme["--red-700"]};

  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
`;

export const ImageAvatar = styled(Avatar.AvatarImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NoImageAvatar = styled(Avatar.Fallback)`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme["--white"]};
  color: ${props => props.theme["--orange-900"]};
  font-size: 1rem;
  line-height: 1;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
`;