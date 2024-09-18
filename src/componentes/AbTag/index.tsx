import React from "react";
import styled from "styled-components"

export interface AbTagProps {
  texto: string
}

const TagEstilizada = styled.div`
  background-color: #EB9B00;
  padding: 24px 32px;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: #FFF;
  display: inline-block;
  font-family: sans-serif;
`;

export const AbTag = ({ texto }: AbTagProps) => {
  return (<TagEstilizada>
    {texto}
  </TagEstilizada>)
}