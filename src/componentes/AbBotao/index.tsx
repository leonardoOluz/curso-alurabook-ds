import React from "react";
import styled, { css } from "styled-components";

export interface AbBotaoProps {
  texto?: string,
  tipo?: 'primario' | 'secundario',
  onClick?: () => void
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
    background: ${props => props.tipo === 'primario' ? '#EB9B00' : '#fff'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${props => props.tipo === 'primario' ? '#fff' : '#EB9B00'};
    font-size: 20px;
    cursor: pointer;

    ${props => props.tipo === 'primario'
    ? css`
      &:hover {
        background: #B87900;
        border: 2px solid #B87900;
      }
    `
    : css`
      &:hover {
        background: #fff;
        border: 2px solid #B87900;
        color: #B87900;
      }
    `
  }
`


export const AbBotao = ({ onClick, texto, tipo = "primario" }: AbBotaoProps) => {
  return (<BotaoEstilizado onClick={onClick} tipo={tipo}>
    {texto}
  </BotaoEstilizado>)
}