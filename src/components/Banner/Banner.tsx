import React from "react";
import './Banner.css';
import logo from "../../Images/LOGO.png"

const Banner: React.FC = () => {
    return (
        <section className="Banner">
            <div className="banner-transparente">
                <img id="logo-banner" src={logo} alt="Logo" />
                <p id="texto-banner">Já possui conta? Crie seu evento agora mesmo!</p>
                <button className="criar-evento">Entrar</button>
                <p id="texto-banner">Não é usuário? Cadastre-se!</p>
                <button className="criar-evento">Cadastrar</button>
            </div>
        </section>
    );
};

export default Banner;