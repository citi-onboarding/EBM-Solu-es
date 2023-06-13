import React from "react";
import { ClienteContainer, Image } from './style';

type ClientesProps = {
    src: string;
    width: string;
    height: string;
}

export const Cliente = ({src, width, height} : ClientesProps) => {
    return(
       <ClienteContainer>
           <Image
            src = {src}
            width = {width}
            height = {height}
            />
       </ClienteContainer>
    )
}