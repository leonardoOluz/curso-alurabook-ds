import React from "react";
import styled from "styled-components"

const CardEstilizado = styled.div`
  width: 380px;
  height: 283px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 4px  rgba(0, 0, 0, 0.25);
  padding: 16px;


  @media screen and (min-width: 768px) {
    width: 725px;
    height: 266px;
    padding: 24px;
  }

  @media screen  and (min-width: 1024px){
    width: 551px;
    height: 374px;
    padding: 48px 32px 48px 48px;
  }

`

export const AbCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (<CardEstilizado>
    {children}
  </CardEstilizado>
  )
}