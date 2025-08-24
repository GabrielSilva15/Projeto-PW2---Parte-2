import styled from "styled-components";
import bg from "../../Images/background2.png"; // ajuste o caminho da sua imagem

export const ContainerWrapper = styled.div`
  margin: 0;
  width: 100%;
  height: 100vh; /* ocupa a altura da tela inteira */
  background: url(${bg}) no-repeat center center;
  background-size: cover;  /* cobre toda a tela */
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed; 
`;