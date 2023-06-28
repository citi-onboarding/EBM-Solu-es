import styled from 'styled-components'; 


export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 40px;
    text-align: center;

    @media (max-width: 720px) {
      font-size: 28px;
    }
  }
  
  p {

    font-size: 20px;
    margin-top: 24px;
    line-height: 32px;

    @media (max-width: 720px) {
      font-size: 16px;
      margin-top: 0;
    }
  }

  img {
    width: 25%;
  }
`;

export const DivCard = styled.div`
//position: absolute;
//top: 300px;
//height: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`
export const Square = styled.div`
position: right;
width: 77px;
height: 77px;
background: linear-gradient(286.01deg, #B85941 22.29%, #735742 171.77%);
border-radius: 10px;
margin-right: 100px;
`
export const DivMain = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const Title = styled.p`
width: 369px;
height: 41px;
font-family: 'Anybody';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 41px;
color: #373737;
margin-bottom:0px;
`
export const DivSquare = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
/* padding-right: 107px; */
`
export const Line = styled.div`
width: 195px;
//position: relative;
//top: 40px;
left: 628px;
height: 4px;
background: #B85941;
margin: 0%;
`
export const DivLine = styled.div`

height: 100px;
width: 30%;
display: flex;
justify-content: flex-end;
`
