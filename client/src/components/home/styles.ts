import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
width: 100%;
height: 100vh; 
`
export const Line = styled.div`
background: linear-gradient(286.01deg, #B85941 22.29%, #735742 171.77%);
border-radius: 10px;
position: absolute;
width: 262px;
height: 6px;
`
export const Square = styled.div`
position: relative;
left: 560px;
top: 10px;
width: 77px;
height: 77px;
background: linear-gradient(286.01deg, #B85941 22.29%, #735742 171.77%);
border-radius: 10px;
margin: 10px;
`
export const DivSquare = styled.div`
align-items: center;
flex-direction: column;
height:100vh;

`

export const ImageContainer = styled.div`
position:relative;
left:40px;
top: 40px;
`
export const TextContainer = styled.div`
position:relative;
left: 40px;
top:40px;
padding:40;
width:85%;
display: flex;
flex-direction: column;
`
export const MouseContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
`
export const ImageComponent = styled.img`
    height: ${(props)=>props.height};
    width: ${(props)=>props.width};
    border-radius: 10px;
`;

export const Title = styled.h1`
font-weight: 700;
font-size: 54px;
color: #B85941;
font-family: 'Anybody', cursive;
`

export const Text = styled.p`
font-size: 16px;
line-height: 17px;
color: #373737;
font-family: 'Anybody', cursive;
`
export const MouseTextPT = styled.p`
font-size: 14px;
color: #000000;
font-family: 'Rubik';
opacity: 0.55;
font-style: italic;
margin:2px;
`

export const MouseTextEN = styled.p`
font-size: 10px;
color: #000000;
font-family: 'Rubik';
opacity: 0.55;
font-style: italic;
margin: 2px;
`

export const TextContainerMouse = styled.div`
display:flex;
flex-direction: column;
`



