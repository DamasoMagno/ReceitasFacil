import { User } from "phosphor-react";

import { AvatarContainer, NoImageAvatar, ImageAvatar } from "./styles";

interface AvatarProps {
  src?: string;
}

export function Avatar({ src }: AvatarProps) {
  return (
    <AvatarContainer>
      <ImageAvatar src={src ? src : ""} alt="Minha foto de perfil" />
      <NoImageAvatar>
        <User />
      </NoImageAvatar>
    </AvatarContainer>
  );
}
