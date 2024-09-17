import React from "react";
import { Meta, StoryObj } from "@storybook/react"
import { CardLivros } from "../componentes/CardLivros";

export default {
  title: "CardLivros",
  component: CardLivros,
} as Meta;

export const card: StoryObj = {
  args: {
    titulo: "Card",
    autor: "Leonardo",
  },
};

export const CardComponente = () => {
  return (<CardLivros>
    <h1>Olá eu sou um card !</h1>
  </CardLivros>);
}