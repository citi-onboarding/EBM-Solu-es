import styled from "styled-components";

interface NRsProps{
    color: string;
    selected: boolean;
}

export const NRsContainer = styled.div<NRsProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const NRTitle = styled.h1`
    font-family: 'Anybody';
    font-style: normal;
    font-weight: 900;
    font-size: 80px;
    line-height: 83px;
    background: linear-gradient(163.86deg, #B85941 -7.74%, #735742 160.51%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-align: center;
    margin: 0%;

`;

export const Caption = styled.p`
    font-family: 'Anybody';
    font-style: italic;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    text-align: center;
    color: #373737;
    margin: 0%;
`
