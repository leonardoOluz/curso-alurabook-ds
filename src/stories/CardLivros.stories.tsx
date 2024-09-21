import React from "react";
import { Meta, StoryObj } from "@storybook/react"
import { AbCard } from "../componentes/AbCard";

export default {
  title: "AbCard",
  component: AbCard,
} as Meta<typeof AbCard>;

export const padrao: StoryObj = {
  args: {
    titulo: "Card",
    autor: "Leonardo",
  },
};

export const AbCardComponente = () => {
  return (<AbCard>
    <h1>Olá eu sou um card !</h1>
  </AbCard>);
}