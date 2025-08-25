import { ReactNode } from "react";
import { ContainerWrapper } from "./styles";


export const Container = ({children}:{children:ReactNode}) =>{
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    )
}