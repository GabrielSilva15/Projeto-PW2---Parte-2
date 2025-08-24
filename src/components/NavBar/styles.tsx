// styles.ts
import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  width: 100%;
  height: 90px;
  background: #1e1e2f; /* cor de fundo da navbar */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  margin-bottom: 20px;
  z-index: 1000;
  position: relative; /* importante pra posicionar a logo */
`;

export const NavBarList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;

  &.rotas-logado {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const ItemList = styled.li`
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 22px;
    font-weight: 500;
    transition: all 0.3s ease;

    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 6px 10px;
    border-radius: 8px;

    &:hover {
      background: #2d2d44;
      color: #00d4ff;
    }

    &.active {
      color: #00d4ff;
      font-weight: 600;
      border-bottom: 2px solid #00d4ff;
    }
  }
`;

export const Logo = styled.img`
  width: 160px;
  height: auto;
  margin-left: 10px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 20px;   /* espaço da borda esquerda */
  top: 50%;
  transform: translateY(-50%);
`;

export const BtnLogout = styled.div`
  position: absolute;
  right: 20px;   /* espaço da borda direita */
  top: 50%;
  transform: translateY(-50%);

  #rota-logout {
    color: #ff0004ff;

    &:hover {
      background: #3a1c1c;
      color: #00d4ff;
    }
  }
`;