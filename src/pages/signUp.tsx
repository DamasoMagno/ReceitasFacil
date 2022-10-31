import Link from "next/link";

import { EnvelopeSimple, Hamburger, User, Lock } from "phosphor-react";

import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { Container, Form } from "../styles/pages/SignUp";

export default function signUn() {
  return (
    <Container>
      <div className="logo">
        <Hamburger />
        <h2>ReceitasFácil</h2>
      </div>

      <Form>
        <Input placeholder="Nome">
          <User />
        </Input>
        <Input placeholder="E-mail">
          <EnvelopeSimple />
        </Input>
        <Input placeholder="Senha">
          <Lock />
        </Input>

        <Button>Cadastrar</Button>
      </Form>

      <Link href="/signIn">Já tem conta?</Link>
    </Container>
  );
}
