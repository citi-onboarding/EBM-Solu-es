import styled from "styled-components";

interface ContainerProp {
    color: string;
    selected: boolean;
}

export const Container = styled.div<ContainerProp>`
    display: flex;
    flex-direction: column; 
    justify-content: space-around;
    box-shadow: ${(props) => props.selected ? "0px 0px 10px 0px rgba(0,0,0,0,75)" : "none"};
    margin: 20px;
    padding: 20px;
    box-sizing: border-box;
    width: 302px;
    height: 329px;
    background: rgba(184, 89, 65, 0.8);
    border: 1px solid rgba(184, 89, 65, 0.8);
    border-radius: 10px;
`

export const ServiceName = styled.h1`
    font-weight: 700;
    font-size: 24px;
    color: #FCFCFC;
    font-family: 'Anybody', cursive;
`
export const ServiceDescription = styled.p`
    font-size: 16px;
    line-height: 16px;
    color: #FCFCFC;
    font-family: 'Anybody', cursive;

`