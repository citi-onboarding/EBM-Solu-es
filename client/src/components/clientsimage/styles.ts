import styled from "styled-components";

interface ContainerProp{
    selected: boolean;
}

export const Container = styled.div<ContainerProp>``

export const ImageComponent = styled.img`
    height: ${(props)=>props.height};
    width: ${(props)=>props.width};
    border-radius: 10px;

    margin-left: 35px;
`;
