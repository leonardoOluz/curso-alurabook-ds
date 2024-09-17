import { Meta, StoryObj } from "@storybook/react"
import { AbBotao } from "../componentes/AbBotao";

export default {
  title: "AbBotao",
  component: AbBotao,
} as Meta;

export const botao: StoryObj = {
  args: {
    titulo: "Botão",
    autor: "Leonardo O Luz"
  },
};