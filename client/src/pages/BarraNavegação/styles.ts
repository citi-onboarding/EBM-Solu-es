import styled from 'styled-components'; 

export const Main = styled.div`
    display: flex;
    height: 104px;
    margin-bottom: 112px;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.15);
`;

export const Ebm = styled.div`
    margin-left: 120px;
    margin-top: 35px;
`;

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 135px;
    height: 49px;
    margin-top: 27px;
    margin-left: 109px;
    background-color: #B85941;
    border-radius: 4px;
    cursor: pointer;
    
`;

export const Texto = styled.p`
   font-family: 'Anybody';
   font-style: normal;
   font-weight: 700;
   font-size: 18px;
   color: #FFFFFF;

   
`;

export const Texto2 = styled.p`
   font-family: 'Anybody';
   font-style: normal;
   font-weight: 400;
   font-size: 20px;
   color: #373737;
   margin: 0%;
    &:hover {
        border-bottom: 2px solid #B85941;;
        display: inline;
    }
`;

export const Preto = styled.div`
   display: flex;
   margin-top: 41px;
   margin-left: 281px;
   gap: 48px;
   height: 40px;
`;
