import { Funnel, X } from "phosphor-react";

import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { Input } from "../components/Input";

import { Content, Filters, RecipeList } from "../styles/pages/Recipes";

export default function Recipes() {
  return (
    <>
      <Header />
      <Content>
        <Filters>
          <Input placeholder="Categoria">
            <Funnel />
          </Input>

          <div className="ingredients">
            <Input placeholder="Ingrediente" />
            <Button>Buscar</Button>
            <span>11 ingredientes selecionados:</span>

            <ul>
              <button>
                Leite <X />
              </button>
              <button>
                Leite <X />
              </button>
              <button>
                Leite Ninho <X />
              </button>
              <button>
                Paçoca <X />
              </button>
            </ul>
          </div>
        </Filters>

        <RecipeList />
      </Content>
    </>
  );
}
