import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 32px;
  width: 100%;
  box-sizing: border-box;
`;

export const CardEvento = styled.div`
  width: 100%;
  max-width: 800px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.08);
  padding: 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const EventoImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
`;

export const DadosEvento = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const EventoTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
`;

export const EventoDate = styled.span`
  font-size: 16px;
  color: #374151;
`;

export const EventoInfo = styled.span`
  font-size: 16px;
  color: #374151;
`;

export const EditButton = styled.button`
  align-self: flex-end;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #4f46e5;
  margin-top: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

export const BoxConvites = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
`;

export const BoxConvidados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ConvidadoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ConviteButton = styled.button`
  background: #4f46e5;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #3730a3;
  }
`;

export const GuestsTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-top: 12px;
`;

export const ListaConvidados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Convidado = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const BoxPresenca = styled.div<{ presenca: boolean }>`
  padding: 10px 14px;
  border-radius: 8px;
  color: #fff;
  background-color: ${(props) => (props.presenca ? "#3aff5b" : "#ff3a44")};
  display: flex;
  flex-direction: column;
  min-width: 140px;
  align-items: center;
`;

export const PresencaText = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

export const PresencaStatus = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const MensagemInfo = styled.p`
  font-size: 14px;
  color: #6b7280;
`;
