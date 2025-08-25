import { BannerWrapper, BannerContent, BannerLogo, BannerText } from "./styles";
import logo from "../../Images/LOGO.png";

export const BannerWelcome = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <BannerLogo src={logo} alt="Logo" />
        <BannerText>Bem-vindo de volta ao Bora Bora! Crie, descubra e participe de eventos incríveis 🚀</BannerText>
      </BannerContent>
    </BannerWrapper>
  );
};
