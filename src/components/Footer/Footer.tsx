import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FooterWrapper, FooterContent, SocialIcons, CopyRight } from "./styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>Sua plataforma de eventos online</p>

        <CopyRight>
          © {new Date().getFullYear()} - Todos os direitos reservados | BoraBora Team
        </CopyRight>

         <SocialIcons>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </SocialIcons>
        
      </FooterContent>
    </FooterWrapper>
  );
};
