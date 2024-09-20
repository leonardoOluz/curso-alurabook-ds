import { Meta, StoryObj } from "@storybook/react/*";
import { AbModal, AbModalProps } from "../componentes/AbModal";

export default {
  title: 'AbModal',
  component: AbModal,
} as Meta<typeof AbModal>

export const AbModalComponent: StoryObj = {
  args: {
    titulo: 'Titulo do Modal',
  } as AbModalProps
}