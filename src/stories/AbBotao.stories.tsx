import { Meta, StoryObj } from "@storybook/react"
import { AbBotao, AbBotaoProps } from "../componentes/AbBotao";

export default {
  title: "AbBotao",
  component: AbBotao,
} as Meta<typeof AbBotao>;

export const botaoPrimario: StoryObj = {
  args: {
    titulo: "Botão",
    autor: "Leonardo O Luz",
    texto: "Clique aqui",
    tipo: "primario"
  } as AbBotaoProps,
};

export const botaoSecundario: StoryObj = {
  args: {
    titulo: "Botão",
    autor: "Leonardo O Luz",
    texto: "Clique aqui",
    tipo: "secundario",
  } as AbBotaoProps,
};