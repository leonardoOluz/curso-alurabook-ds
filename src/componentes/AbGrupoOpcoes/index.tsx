import React, { useState } from "react";
import styled from "styled-components";

const SectionEstilizado = styled.section<{ selecionado: boolean }>`
  width: 194px;
  height: 88px;
  padding: 8px 0px;
  gap: 8px;
  background: ${props => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFFFFF'};
  border-radius: 8px;
  border: 1px solid ; 
  border-color: ${props => props.selecionado ? '#002F52' : '#EB9B00'};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;

  header {
    color: ${props => props.selecionado ? '#fff' : '#EB9B00'};
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;
  }

  strong {
    color: ${props => props.selecionado ? '#fff' : '#EB9B00'};
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.25rem;
  }

  footer {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: ${props => props.selecionado ? '#fff' : 'rgba(0, 0, 0, 0.54)'};
  }
`
export interface AbGrupoOpcao {
  id: number,
  titulo: string,
  corpo: string,
  rodape: string
}

export interface AbGrupoOpcoesProps {
  opcoes: AbGrupoOpcao[]
  valorPadrao?: AbGrupoOpcao | null
  onChange?: (opcao: AbGrupoOpcao) => void
}


export const AbGrupoOpcoes = ({ opcoes, onChange, valorPadrao }: AbGrupoOpcoesProps) => {

  const [selecao, setSelecao] = useState<AbGrupoOpcao | null>(valorPadrao ?? null)

  const aoSelecionar = (opcao: AbGrupoOpcao): void => {
    setSelecao(opcao)
    if (onChange) {
      onChange(opcao)
    }
  }

  return (<>
    {opcoes.map(opcao => (
      <SectionEstilizado
        onClick={() => aoSelecionar(opcao)}
        key={opcao.id}
        selecionado={selecao?.id == opcao.id}
      >
        <header>
          {opcao.titulo}
        </header>
        <div>
          <strong>{opcao.corpo}</strong>
        </div>
        <footer>
          {opcao.rodape}
        </footer>
      </SectionEstilizado>
    ))}
  </>)
};
