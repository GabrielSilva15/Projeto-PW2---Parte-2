import { JSX, useContext } from "react"
import { AuthContext } from "./AuthContext";
import { Login } from "../../pages/LoginPage";


export const RequireAuth = ({children}: {children:JSX.Element})=>{

    const {token} = useContext(AuthContext);

    if(!token){
        return <Login/>
    }
    return children;
}