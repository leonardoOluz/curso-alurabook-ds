import { Meta, StoryObj } from "@storybook/react/*";
import { AbTag, AbTagProps } from "../componentes/AbTag";

export default {
  title: 'AbTag',
  component: AbTag,
} as Meta<typeof AbTag>

export const AbTagComponent: StoryObj = {
  args: {
    titulo: 'Tag',
    autor: 'Leonardo O Luz',
    texto: 'Android'
  } as AbTagProps
}