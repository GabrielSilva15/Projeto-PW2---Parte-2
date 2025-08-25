import { BannerWrapper, BannerContent, BannerLogo, BannerText, BannerButton, BannerSection } from "./styles";
import logo from "../../Images/LOGO.png";
import { useNavigate } from "react-router-dom";

export const Banner = () => {
  const navigate = useNavigate();

  return (
    <BannerWrapper>
      <BannerContent>
        <BannerLogo src={logo} alt="Logo" />

        <BannerSection>
          <BannerText>Já possui conta? Crie seu evento agora mesmo!</BannerText>
          <BannerButton onClick={() => navigate("/login")} >Entrar</BannerButton>
        </BannerSection>   

        <BannerSection>
          <BannerText>Não é usuário? Cadastre-se!</BannerText>
          <BannerButton onClick={() => navigate("/cadastro")} >Cadastrar</BannerButton>
        </BannerSection>     
        
      </BannerContent>
    </BannerWrapper>
  );
};