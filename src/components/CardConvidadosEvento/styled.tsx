import styled from "styled-components";

export const ConvidadoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 10px 14px;
  margin: 8px 0;

  background-color: #f9f9f9;
  border-radius: 12px;

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  }
`;

export const ConvidadoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;

  border: 2px solid #ddd;
`;

export const ConvidadoNome = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;
