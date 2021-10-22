import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,1,191,1) 35%, rgba(0,212,255,1) 100%);
  color: #ffffff;

  li{
    list-style: none;
  }
}
`;

export const AppContainer = styled.div`
  text-align: center;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 23px;
`;
