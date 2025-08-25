// styled.ts
import styled from "styled-components";

export const CardWrapper = styled.li`
  list-style: none;
  background: #ffffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }
`;

export const DadosEvento = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgEvento = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const HeadEvent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem;
`;

export const TitleEvent = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #111;
`;

export const AdressEvent = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  color: #444;
`;

export const DateEvent = styled.span`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: #666;
`;
