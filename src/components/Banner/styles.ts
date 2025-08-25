import styled from "styled-components";

export const BannerWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  text-align: center;
`;

export const BannerContent = styled.div`
  background-color: rgba(122, 216, 203, 0.84);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

  max-width: 500px;
  width: 450px;
  height: 400px;

  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const BannerLogo = styled.img`
  width: 350px;
  margin-top: -100px; /* sobe o logo sem quebrar o fluxo */
  margin-bottom: 10px; /* espaço depois do logo */
`;

export const BannerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  
   &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const BannerText = styled.p`
  color: #ffffffff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px; /* Dá espaço entre texto e botão */
`;

export const BannerButton = styled.button`
  background: #34c5ff;
  border: 1px solid white;
  color: white;

  height: 50px;
  width: 150px;
  padding: 10px 10px;

  border-radius: 15px;
  cursor: pointer;

  font-size: 20px;
  margin-top: 10px;

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: white;
    color: #00bfa6;
  }
`;
