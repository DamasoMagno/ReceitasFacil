import Link from "next/link";

import {
  Hamburger,
  SignIn,
  GoogleLogo,
  Lock,
  EnvelopeSimple,
} from "phosphor-react";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { Container, Form } from "../styles/pages/SignIn";

export default function signIn() {
  return (
    <Container>
      <div className="logo">
        <Hamburger />
        <h2>ReceitasFácil</h2>
      </div>

      <Form>
        <Input placeholder="E-mail">
          <EnvelopeSimple />
        </Input>
        <Input placeholder="Senha">
          <Lock />
        </Input>

        <Link href="/forgotPassword">Esqueceu a senha?</Link>

        <Button variant="ghost">Login</Button>
      </Form>

      <Link href="/signUp" className="signUp">
        Criar conta <SignIn />
      </Link>

      <Button>
        <GoogleLogo /> Google
      </Button>
    </Container>
  );
}
