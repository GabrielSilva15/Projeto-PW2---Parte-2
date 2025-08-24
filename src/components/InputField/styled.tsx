import styled from "styled-components";

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #ffffffff;
  margin-bottom: 6px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 100%; /* garante que nunca ultrapasse o pai */
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 15px;
  outline: none;
  background-color: #fff;
  transition: border 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box; /* corrige o estouro lateral */

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;
