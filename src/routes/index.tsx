import { Routes, Route, Navigate } from "react-router-dom"
import { Login } from "../pages/LoginPage"
import { Home } from "../pages/Home"
import { RequireAuth } from "../contexts/Auth/RequireAuth"
import { Perfil } from "../pages/PerfilPage"
import { Eventos } from "../pages/ListEventosPage"
import { EditEventPage } from "../pages/EditEventoPage"
import { CreateEvento } from "../pages/CreateEventoPage"
import { EditPerfil } from "../pages/EditPerfilPage"
import { CreateUser } from "../pages/RegisterUserPage"
import { InfoEvento } from "../pages/InfoEventoPage"
import { ConvitesUsuario } from "../pages/ConviteUsuarioPage"


export const AppRoutes = ()=>{
    return (
        <Routes>
            <Route  path="/login" element={<Login/>}></Route>
            <Route path="/" element={<RequireAuth><Home/></RequireAuth>}></Route>
            <Route path="/perfil" element={<RequireAuth><Perfil/></RequireAuth>}></Route>
            {<Route path="/eventos" element={<RequireAuth><Eventos/></RequireAuth>}></Route>}
            <Route path="/edit-evento?" element={<RequireAuth><EditEventPage/></RequireAuth>}></Route>
            <Route path="/create-evento" element={<RequireAuth><CreateEvento/></RequireAuth>}></Route>
            <Route path="/perfil/edit" element={<RequireAuth><EditPerfil/></RequireAuth>}></Route>
            <Route path="/cadastro" element={<CreateUser/>}></Route>
            <Route path="/dados-evento/?" element={<RequireAuth><InfoEvento/></RequireAuth>}></Route>
            {<Route path="/convites" element={<RequireAuth><ConvitesUsuario/></RequireAuth>}></Route>}


        </Routes>
    )
}