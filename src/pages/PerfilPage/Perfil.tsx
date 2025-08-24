import { CardPerfil } from "../../components/CardPerfil/CardPerfil"
import { Container } from "../../components/Container/Container"
import { Footer } from "../../components/Footer/Footer"
import { NavBar } from "../../components/NavBar/NavBar"
import "./Perfil.css"

export const Perfil = ()=>{
    return (
        <Container>
            <NavBar/>
            <div className="boxPerfil">
                <h2>Perfil</h2>
                <CardPerfil></CardPerfil>    
            </div>
            <Footer/>
        </Container>
    )
}