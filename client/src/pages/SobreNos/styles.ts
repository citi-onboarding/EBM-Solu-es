import styled from 'styled-components'; 

export const Main = styled.div`
  display: flex;
  height: 69vh;
`;

export const Title = styled.div`
  display: flex;
  justify-content: right;
  flex-direction: column;
  padding-top: 69px;
`;

export const Texto = styled.div`
  display: flex;
  justify-content: right;
  flex-direction: column;
`;

export const Container = styled.div`
  margin-left: 119px;
  gap: 54px;
`;

export const Slogan = styled.div`
  h1 {
    width: 386px;
    height: 82px;
    font-family: 'Anybody';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 41px;
  }

  .color1{
    color: #373737;
  }

  .color2{
    color: #B85941;
  }

  .color3{
    color: #735742;
  }
`;

export const Sobre = styled.p`
  width: 524px;
  height: 187px;
  font-family: 'Anybody';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #373737;
`;

export const NR35 = styled.div`
  margin-top: 55px;
  margin-left: 60px;
`;

export const NR12 = styled.div`
  margin-top: 90px;
  margin-left: 301px;
`;

export const NR = styled.div`
  width: 50%;
  //background-color: aquamarine;
`;

export const Line = styled.hr`
    position: absolute;
    width: 293px;
    height: 4px;
    top: 176px;
    background: linear-gradient(163.86deg, #B85941 -7.74%, #735742 160.51%);
    color: #B85941;
`