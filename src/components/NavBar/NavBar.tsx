//import { Link } from "react-router-dom"
import IconWrapper from "../Icon"
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useContext } from "react";
import { ItemList, NavBarList, NavBarWrapper, Logo, LogoContainer, BtnLogout } from "./styles";
import logo from "../../Images/LOGO.png"
import { NavLink } from "react-router-dom";


export const NavBar = ()=>{

    const {user,token,signOut} = useContext(AuthContext);

    return (
        <>
            <NavBarWrapper>
                <LogoContainer>
                    <Logo src={logo} alt="" />
                </LogoContainer>
                
                {token && 
                    <NavBarList className="rotas-logado">
                        <ItemList>
                            <NavLink to="/">Home</NavLink>
                        </ItemList> 

                        <ItemList>
                            <NavLink to="/perfil">Perfil</NavLink>
                        </ItemList>

                        <ItemList>
                            <NavLink to="/eventos">Eventos</NavLink>                        
                        </ItemList>

                        <ItemList>                        
                            <NavLink to="/convites">Convites</NavLink>
                        </ItemList>

                        <BtnLogout>                        
                            <NavLink id="rota-logout" to="/" onClick={signOut}>
                                <IconWrapper icon={FiLogOut}/>
                            </NavLink>   
                        </BtnLogout>
                    </NavBarList>
                }
            </NavBarWrapper>
        </>
    )
}
