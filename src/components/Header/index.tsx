import Link from "next/link";
import { Hamburger, List, MagnifyingGlass } from "phosphor-react";

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
          <MagnifyingGlass />
        </Input>

        <nav>
          <div className="pages">
            <Link href="#">Inicio</Link>
            <Link href="/recipes">Receitas</Link>
          </div>

          <div className="menu">
            <button>
              <List />
            </button>
            <Link href="/signIn">
              <Avatar src="https://github.com/DamasoMagno.png" />
            </Link>
          </div>
        </nav>
      </Content>
    </Container>
  );
}
