import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background: #1e1e2f;
  padding: 20px 10px;
  margin-top: 40px;
  box-shadow: 0 -4px 6px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;

   position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999; /* garante que fica acima de outros elementos */

    display: flex;
    justify-content: center;
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  p {
    font-size: 16px;
    color: #bdbdbd;
    margin: 0;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  text-align: right;

  a {
    color: #ffffff;
    font-size: 28px;
    transition: all 0.3s ease;

    &:hover {
      color: #00d4ff;
      transform: scale(1.2);
    }
  }
`;

export const CopyRight = styled.p`
  font-size: 14px;
  color: #a0a0a0;
  margin: 0px;
  
`;
