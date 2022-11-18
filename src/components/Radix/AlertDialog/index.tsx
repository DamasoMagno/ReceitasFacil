import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-alert-dialog";

import { Button } from "../../Button";

import { 
  Overlay, 
  Content, 
  Title, 
  Description, 
  Footer 
} from "./styles";

interface AlertDialogProps {
  children: ReactNode;
}

export function AlertDialog({ children }: AlertDialogProps) {
  return (
    <Dialog.Root>
      <Overlay />
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Content>
          <Title>Confirmar Cadastro</Title>
          <Description>
            Confirmando a ação, sua receita será cadastrada em nossa plataforma.
          </Description>

          <Footer>
            <Dialog.Cancel asChild>
              <Button>Cancelar</Button>
            </Dialog.Cancel>

            <Dialog.Action asChild>
              <Button>Confirmar</Button>
            </Dialog.Action>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
