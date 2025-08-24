import styled from "styled-components";

export const PageLogin = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(135deg, #c689ffd5, #302bb8d3); /* degrade */
  padding: 2rem;
`;

export const BoxLogin = styled.div`
  width: 100%;
  max-width: 420px;

  background: #63e2c79f;
  padding: 2rem;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

export const HeadLogin = styled.div`
  text-align: center;

  span {
    font-size: 1.8rem;
    font-weight: bold;
    color: #4a47a3;
  }
`;

export const SubtitleLogin = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  span:first-child {
    font-size: 1.3rem;
    font-weight: 600;
    color: #ffffffff;
  }

  span:last-child {
    font-size: 0.9rem;
    color: #ffffffff;
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .dadosLogin {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    span {
      font-size: 0.8rem;
      color: red;
    }
  }

  .textCadastre {
    font-size: 0.85rem;
    color: #fffefeff;
    text-align: center;

    .cadastreAqui {
      color: #453bffff;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .errorMessage {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: red;
    text-align: center;
  }
`;

export const Logo = styled.img`
  width: 180px;
  height: auto;
  margin-bottom: 10px;
`;
