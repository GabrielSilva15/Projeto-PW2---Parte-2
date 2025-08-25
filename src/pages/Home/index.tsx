import { NavBar } from "../../components/NavBar";
import { InputField } from "../../components/InputField"
import { Container } from "../../components/Container";
import { FooterWrapper } from "../../components/Footer/styles";
import { Footer } from "../../components/Footer";
import { Banner } from "../../components/Banner";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useContext } from "react";
import { BannerWelcome } from "../../components/BannerWelcome";

export const Home = ()=>{
    const {user} = useContext(AuthContext);

    return(
            <Container>
                <NavBar/>
                <BannerWelcome/>
                <Footer/>
            </Container>
       
    )
}