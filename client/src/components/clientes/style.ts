import styled from "styled-components";

interface ClientesProps{
    width: string;
    height: string; 
}

export const ClienteContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const Image = styled.img<ClientesProps>`
    display: flex;
    justify-content: center;
    width: ${(props)=>(props.width)};
    height: ${(props)=>(props.height)};
`;
