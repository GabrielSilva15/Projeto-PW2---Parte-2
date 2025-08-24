import { NavBar } from "../../components/NavBar/NavBar";
import { InputField } from "../../components/InputField/InputField"
import { Container } from "../../components/Container/Container";
import { FooterWrapper } from "../../components/Footer/styled";
import { Footer } from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";

export const Home = ()=>{
    return(
            <Container>
                <NavBar/>
                <Banner/>
                <Footer/>
            </Container>
       
    )
}