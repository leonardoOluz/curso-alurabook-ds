import { Meta, StoryObj } from "@storybook/react/*";
import { fn } from '@storybook/test';
import { AbGrupoOpcoes, AbGrupoOpcoesProps } from "../componentes/AbGrupoOpcoes";

export default {
  title: 'AbGrupoOpcoes',
  component: AbGrupoOpcoes,
   args: {onChange: fn()}
} as Meta<typeof AbGrupoOpcoes>

export const padrao: StoryObj = {
  args: {
    opcoes: [
      {
        id: 1,
        titulo: 'E-book',
        corpo: 'R$ 00,00',
        rodape: '.pdf, .epub, .mob',
      },
      {
        id: 2,
        titulo: 'Impresso',
        corpo: 'R$ 00,00',
        rodape: '.pdf, .epub, .mob',
      },
      {
        id: 3,
        titulo: 'Impresso + E-book',
        corpo: 'R$ 00,00',
        rodape: '.pdf, .epub, .mob',
      }
    ]
  } as AbGrupoOpcoesProps
};