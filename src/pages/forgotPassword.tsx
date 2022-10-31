import Link from "next/link";
import { Key, ArrowLeft } from "phosphor-react";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

import { Container } from "../styles/pages/ForgotPassword";

export default function forgotPassword() {
  return (
    <Container>
      <div className="icon">
        <Key />
      </div>
      <h3>Esqueceu a senha?</h3>
      <p>Não se preocupe! Serão enviados instruções para seu e-mail.</p>

      <Input placeholder="E-mail" />
      <Button>Enviar</Button>

      <Link href="/signIn">
        <ArrowLeft />
        Voltar para o inicio
      </Link>
    </Container>
  );
}
