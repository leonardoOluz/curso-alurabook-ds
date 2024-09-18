import { Meta, StoryObj } from "@storybook/react/*";
import { AbCampoTexto, AbCampoTextoProps } from "../componentes/AbCampoTexto";
import { fn } from "@storybook/test";

export default {
    title: 'AbCampoTexto',
    component: AbCampoTexto
} as Meta<typeof AbCampoTexto>

export const padrao: StoryObj = {
    args: {
        label: 'E-mail',
        value: 'leonardo@email.com',
        placeholder: 'seuemail@maneiro.com.br',
        type: 'text',
        onChange: fn()
    } as AbCampoTextoProps
};