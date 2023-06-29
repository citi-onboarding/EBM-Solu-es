import styled from "styled-components";

export const Container = styled.div`
    position: relative;

`;

// Forms
export const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    z-index:1000;
    position: absolute;
    left: 15rem;
    bottom: 15rem;
`;

export const Form = styled.form`
    width: 55.3125rem;
    height: 33.25rem; 

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    row-gap: 3px;
    padding: 0.3rem 0.4rem 0.3rem 0.4rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #FFFFFF;
`;

export const TitleForm = styled.h2`
    color: var(--primria-preto, #373737);
    text-align: center;
    /* título */
    font-size: 2.5rem;
    font-family: Anybody;
    font-weight: 700; 
`;

export const LineForm = styled.div`
    margin-top: 2.5rem;
    width: 55.3125rem;
    height: 0.5rem; 
    background: var(--primria-laranja, #B85941);
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 41.25rem; 

    
`;

export const Label = styled.label`
    color: var(--primria-preto, #373737);
    font-size: 1.125rem;
    font-family: Anybody;
    font-weight: 500;
    line-height: 1.75rem;
`;

export const Input = styled.input`
    border: none;
    border-bottom: 2px solid #B85941;
    outline: none;

    font-size: 1.125rem;
    font-family: Anybody; 
`;

export const TextArea = styled.textarea`
    border: none;
    border-bottom: 2px solid #B85941;
    outline: none;
    font-size: 1.125rem;
    font-family: Anybody;   
`;

export const Button = styled.button`
    cursor: pointer;
    display: inline-flex;
    padding: 1rem 3.6875rem;
    align-items: flex-start;
    gap: 0.625rem; 

    border-radius: 4px;
    background: var(--primria-laranja, #B85941);
    outline: none;
    border: none;
    /* details - texto */
    font-size: 1.125rem;
    font-family: Anybody;
    font-weight: 500;
    line-height: 1.75rem; 
    color: #FFF2F2;
`;

// background
export const NotGradient = styled.div`
height: 2000px;
`
export const BlackBackground = styled.div`
height: 432px;
background: #373737;
margin-bottom: 14px;
display: flex;
flex-flow: column;
justify-content: end;
align-items: center;

`
export const DivMiddle = styled.div`
margin-top: 250px;
padding-bottom: 30px;
display: flex;
align-items: center;
flex-flow: row;
border-bottom: 1px solid #FFFFFF;
width: 80%;
`
export const Gradient = styled.div`
    height: 60rem; 
    background: linear-gradient(5.31deg, #B85941 30.44%, rgba(217, 217, 217, 0) 91.08%);
    display: flex;
    flex-flow: column-reverse;
`

export const Line = styled.div`
border: 1px solid #FFFFFF;
width: 1126px;
height: 0px;
`
export const DivText = styled.div`
display: flex;
flex-flow: column;
justify-content: start;
margin-left: 5em;
`
export const Contact = styled.p`
font-family: 'Anybody';
font-style: normal;
font-weight: 400;
margin: 0;
font-size: 18px;
color: rgba(255, 255, 255, 0.8);
`
export const Email = styled.p`
font-family: 'Anybody';
font-style: normal;
margin: 0;
font-weight: 400;
font-size: 16px;
color: #FFFFFF;
`

export const BottomPart = styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 1.2em;
`
export const BottomText = styled.p`
font-family: 'Anybody';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 19px;
font-family: 'Anybody';
color: #FFFFFF;
margin: 0 0.4em 0 0.4em;
`
