import styled from "styled-components";

export const PageCreateEvent = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #2c3e50;
    text-align: center;
  }
`;

export const FormCreateEvento = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const DadosEvento = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    width: 100%;
    padding: 0.8rem 1rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 1rem;
    outline: none;

    &:focus {
      border-color: #2d9cdb;
      box-shadow: 0 0 0 2px rgba(45,156,219,0.2);
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.9rem;
  color: #e74c3c;
  font-weight: 500;
`;
