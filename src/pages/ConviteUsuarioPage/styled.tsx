// styled.ts
import styled from "styled-components";

export const ConvitesPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  min-height: 80vh;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #fff;
  }

  p {
    font-size: 25px;
    color: #ffffffff;
  }
`;

export const ConviteCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 600px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  #text-convite {
    font-size: 1.1rem;
    font-weight: 500;
  }

  #text-confirmacao {
    color: #00b894;
    font-weight: bold;
  }
`;

export const BtnsConvite = styled.div`
  display: flex;
  gap: 1rem;
`;

export const BtnAceitar = styled.button`
  background: #34c759;
  border: none;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: #2eae4e;
    transform: scale(1.05);
  }
`;
