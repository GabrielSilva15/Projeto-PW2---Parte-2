import { CardPerfil } from "../../components/CardPerfil/CardPerfil"
import { Container } from "../../components/Container/Container"
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/NavBar/NavBar"
import { PerfilBox } from "./styled";

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