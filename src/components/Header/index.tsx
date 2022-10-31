import Link from "next/link";
import { Hamburger } from "phosphor-react";

import { Input } from "../Input";
import { Avatar } from "../Radix/Avatar";

import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <Link className="logo" href="#">
          <Hamburger />
          <span>Fácil</span>
        </Link>

        <Input placeholder="Encontrar Receitas">
          <Hamburger />
        </Input>

        <nav>
          <div className="pages">
            <Link href="#">Inicio</Link>
            <Link href="#">Receitas</Link>
          </div>

          <Link href="/signIn">
            <Avatar src="https://github.com/DamasoMagno.png" />
          </Link>
        </nav>
      </Content>
    </Container>
  );
}
