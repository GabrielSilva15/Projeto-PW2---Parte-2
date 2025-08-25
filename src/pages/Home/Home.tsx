import { NavBar } from "../../components/NavBar/NavBar";
import { InputField } from "../../components/InputField/InputField"
import { Container } from "../../components/Container/Container";
import { FooterWrapper } from "../../components/Footer/styled";
import { Footer } from "../../components/Footer/Footer";
import { Banner } from "../../components/Banner/Banner";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useContext } from "react";
import { BannerWelcome } from "../../components/BannerWelcome/BannerWelcome";

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