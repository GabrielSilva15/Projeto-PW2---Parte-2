// src/pages/RegisterUser/styles.ts
import styled from "styled-components";

export const PageCadastro = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6b11cbc7 0%, #2574fcd8 100%);
`;

export const BoxCadastro = styled.div`
  width: 100%;
  max-width: 480px;
  background: #63e2c79f;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const HeadCadastro = styled.div`
  text-align: center;

  span {
    font-size: 2rem;
    font-weight: bold;
    color: #2575fc;
  }
`;

export const SubtitleCadastro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  text-align: center;

  span:first-child {
    font-size: 1.25rem;
    font-weight: 600;
    color: #ffffffff;
  }

  span:last-child {
    font-size: 0.9rem;
    color: #ffffffff;
  }
`;

export const FormCadastro = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const DadosCadastro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  span {
    font-size: 0.9rem;
    color: #ffffffff;
    font-weight: 500;
  }

  input {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    outline: none;
    font-size: 0.95rem;
    transition: border 0.3s ease;

    &:focus {
      border-color: #2575fc;
    }
  }

  span:last-child {
    color: red;
    font-size: 0.8rem;
  }
`;

export const TextCadastre = styled.span`
  font-size: 0.9rem;
  text-align: center;
  margin-top: 0.5rem;

  .loginAqui {
    color: white;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Logo = styled.img`
  width: 180px;
  height: auto;
  margin-bottom: 10px;
`;
