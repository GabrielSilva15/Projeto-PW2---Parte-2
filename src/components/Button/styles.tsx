import styled from "styled-components";

export const ButtonPage = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  background: #11d7ffff;
  color: #ffffffff;
  transition: all 0.3s ease;

  &:hover {
    background: #0077ffff;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    background: #00c0e6;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
