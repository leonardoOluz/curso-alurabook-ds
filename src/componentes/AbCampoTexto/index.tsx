import React from "react"
import styled from "styled-components"

const DivEstilizada = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 509px; */
`;

const LabelEstilizado = styled.label`
  color: rgba(0, 47, 82, 1);
  margin-left: 16px;
  margin-bottom: 8px;
  display: block;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const InputEstilizado = styled.input`
  width: 100%;
  color: #002F52;
  padding: 10px 24px;
  margin-bottom: 2px;
  border-radius: 24px;
  border: 1px solid rgba(0, 47, 82, 1);
  font-size: 1rem;
  font-weight: 400;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
  
  &::placeholder {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    color: rgba(164, 164, 164, 1);
  }

`;

export interface AbCampoTextoProps {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'date';
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AbCampoTexto = ({ label, onChange, value, placeholder, type = 'text' }: AbCampoTextoProps) => {
  return (
    <DivEstilizada>
      <LabelEstilizado>{label}</LabelEstilizado>
      <InputEstilizado
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </DivEstilizada>
  )
}