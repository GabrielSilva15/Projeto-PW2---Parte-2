// CardPerfilStyles.ts
import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background: #1e1e2f;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const EditButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #00d4ff;
  font-size: 1.3rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
    color: #00ffff;
  }
`;

export const UserImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 4px solid #00d4ff;
`;

export const DadosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  text-align: center;

  span {
    font-size: 1rem;
    color: #e0e0e0;

    &:first-child {
      font-weight: bold;
      color: #fff;
      font-size: 1.1rem;
    }
  }
`;
