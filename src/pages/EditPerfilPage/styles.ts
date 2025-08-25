// EditPerfilStyles.ts
import styled from "styled-components";

export const PageEditUser = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 2rem auto;
  background: #1e1e2fc9;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
    font-weight: bold;
    color: #00d4ff;
  }
`;

export const FormEditUser = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const DivImageUser = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #00d4ff;
  }

  label {
    position: absolute;
    bottom: 10px;
    right: calc(50% - 70px);
    background: #00d4ff;
    color: #1e1e2f;
    border-radius: 50%;
    padding: 8px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #00ffff;
    }

    svg {
      font-size: 1.2rem;
    }
  }

  input[type="file"] {
    display: none;
  }
`;

export const DadosUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  span {
    font-weight: 500;
    color: #ddd;
  }

  input {
    background: #2d2d44b7;
    color: #fff;
    padding: 0.6rem;
    border-radius: 8px;
    border: 1px solid transparent;
    transition: border 0.3s ease;

    &:focus {
      border: 1px solid #00d4ff;
      outline: none;
    }
  }

  > span:last-child {
    font-size: 0.9rem;
    color: #ff4d4f; /* mensagens de erro */
  }
`;
