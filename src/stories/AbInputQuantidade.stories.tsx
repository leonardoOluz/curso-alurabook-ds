import { Meta, StoryObj } from "@storybook/react/*";
import { AbInputQuantidade, AbInputQuantidadeProps } from '../componentes/AbInputQuantidade'

export default {
    title: 'AbInputQuantidade',
    component: AbInputQuantidade,
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as Meta<typeof AbInputQuantidade>

export const padrao: StoryObj = {
    args: {
    } as AbInputQuantidadeProps
};