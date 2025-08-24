// styled.ts
import styled from "styled-components";

export const PageEditEvent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 1.8rem;
    color: #333;
  }
`;

export const FormEditEvento = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    color: red;
    font-size: 0.9rem;
  }
`;

export const DivImageEvent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 220px;
    height: 220px;
    border-radius: 12px;
    object-fit: cover;
    border: 2px solid #ccc;
  }

  label {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: #2563eb;
    padding: 0.4rem;
    border-radius: 50%;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
      background: #1e40af;
    }
  }

  input[type="file"] {
    display: none;
  }
`;

export const DadosEvento = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 600;
    font-size: 1rem;
    color: #333;
  }
`;

export const BtnRemoveEvent = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #ef4444;
  font-size: 1.8rem;
  align-self: flex-end;

  &:hover {
    color: #b91c1c;
  }
`;

export const Box = styled.div`
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;

  &.glassEdit {
    display: flex;
  }
`;

export const Popup = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  text-align: center;

  p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    justify-content: space-around;
    gap: 1rem;
  }

  .btnRemove {
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.2s;
  }

  .btn-yes {
    background: #ef4444;
    color: white;

    &:hover {
      background: #b91c1c;
    }
  }

  .btn-no {
    background: #9ca3af;
    color: white;

    &:hover {
      background: #4b5563;
    }
  }
`;
