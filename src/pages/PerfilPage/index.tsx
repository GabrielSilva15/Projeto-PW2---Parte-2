import { CardPerfil } from "../../components/CardPerfil"
import { Container } from "../../components/Container"
import { Footer } from "../../components/Footer"
import { NavBar } from "../../components/NavBar"
import { PerfilBox } from "./styles";

export const Perfil = ()=>{
    return (
        <Container>
            <NavBar/>
            <PerfilBox>
                <CardPerfil/>    
            </PerfilBox>
            <Footer/>
        </Container>
    )
}