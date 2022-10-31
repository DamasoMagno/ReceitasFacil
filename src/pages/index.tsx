import { Plus } from "phosphor-react";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { AlertDialog } from "../components/Radix/AlertDialog";

import {
  Recipe,
  CoverImage,
  Ingredients,
} from "../styles/pages/RegisterRecipe";

export default function registerRecipe() {
  return (
    <>
      <Header />
      <Recipe>
        <section>
          <h4>Informações Básicas</h4>

          <CoverImage>
            <input type="file" id="file" />
            <label htmlFor="file">
              <Plus />
            </label>
          </CoverImage>

          <Input placeholder="Nome" className="input" />
          <Input placeholder="Descrição" className="input" />
          <Input placeholder="Categoria" className="input" />
          <Input placeholder="Tema" className="input" />

          <AlertDialog>
            <Button>Cadastrar Receita</Button>
          </AlertDialog>
        </section>

        <section>
          <h4>Estrutura da Receita</h4>
          <Input placeholder="Passo a Passo" />

          <Ingredients>
            <strong>Ingredientes</strong>

            <div className="ingredient">
              <Input placeholder="Ingrediente" />

              <div className="measurements">
                <Input placeholder="Ex: 100" type="number" />
                <Input placeholder="ML" />
              </div>
            </div>

            <div className="ingredient">
              <Input placeholder="Ingrediente" />

              <div className="measurements">
                <Input placeholder="Ex: 100" type="number" />
                <Input placeholder="ML" />
              </div>
            </div>
          </Ingredients>
        </section>
      </Recipe>
    </>
  );
}
